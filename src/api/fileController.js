
const Logger = require("../logger/Logger.js");
const dataSource = require("../db/model/DB.js");
const Brand= dataSource.models.Brand;
const CardTemplate= dataSource.models.CardTemplate;
const path = require("path"); 
const uuidv4 = require('uuid').v4;
const saveBrand =  require("../service/BrandService.js");

const express = require("express");
const fileRouter = express.Router();

const saveFile = async function (req, file, callback) {  
  const fileExtension =path.extname(file.originalname);
  const fileName = uuidv4()+fileExtension;

  const brand = {}; 
  brand.name = req.body.name;
  brand.brandColor = req.body.brandColor;
  brand.logoURL = "file/"+fileName;

  brand.userId = req.session.user.id;
  try{
    let result = await saveBrand(fileName, brand, callback);
    callback(null, result.fileName); 
  }catch(error){
    callback(error);
  }
  
}  

var multer  =   require('multer');  

var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, path.join(__dirname, '..', 'uploads'));  
  },  
  filename: saveFile
});  



fileRouter.get('/:fileName',function(req,res){  
  let fileName = req.params.fileName;
  res.sendFile(path.join(__dirname, '..', "/uploads/"+fileName));  
});  

const upload = multer({ storage : storage}).single('logo');  

fileRouter.post('/upload',function(req,res){  
  console.log(req.session.user.id);
  upload(req,res,function(err,_brand) { 

    if(err) {  
     Logger.log({
      level:"info",
      message: `An error happended while creating the brand`
    });
     Logger.log({
      level:"error",
      message: err
    });
     return res.status(500).send(err);  
   }  

   res.redirect("/admin#companies");
   
 });  
});  

module.exports = fileRouter;