const Logger = require("../logger/Logger.js");
const dataSource = require("../db/model/DB.js");
const Brand= dataSource.models.Brand;
const path = require("path"); 
const uuidv4 = require('uuid').v4;

const express = require("express");
const fileRouter = express.Router();


var multer  =   require('multer');  

var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, path.join(__dirname, '..', 'uploads'));  
  },  
  filename: function (req, file, callback) {  
    const fileExtension =path.extname(file.originalname);
    const fileName = uuidv4()+fileExtension;

    const brand = {}; 
    brand.name = req.body.name;
    brand.brandColor = req.body.brandColor;
    brand.logoURL = "file/"+fileName;

    brand.userId = req.session.user.id;
        
    Brand.create(brand).then((savedBrand)=>{
      const _brand = savedBrand.dataValues;

      Logger.log({
        level:"info",
        message: JSON.stringify(_brand)
      });
      
      callback(null, fileName);  
    });
    
  }  
});  

fileRouter.post('/upload',function(req,res){  
    console.log(req.session.user.id);
    upload(req,res,function(err,_brand) { 

        if(err) {  
          console.log(err);
            return res.status(500).send(err);  
        }  

        res.status(200).send({_brand});
      
    });  
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
          console.log(err);
            return res.status(500).send(err);  
        }  

        res.status(200).send({_brand});
      
    });  
});  

module.exports = fileRouter;