var path = require("path"); 
var express =   require("express");  
var multer  =   require('multer');  
var app =   express();  
var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, path.join(__dirname, '..', 'uploads'));  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname);  
  }  
});  
var upload = multer({ storage : storage}).single('logo');  
  
app.get('/',function(req,res){  
      res.sendFile(path.join(__dirname, '..', 'index2.html'));  
});  
  
app.post('/uploadjavatpoint',function(req,res){  
    upload(req,res,function(err) {  
        if(err) {  
            return res.end("Error uploading file.");  
        }  
        res.end("File is uploaded successfully!");  
    });  
});  
  
app.listen(2000,function(){  
    console.log("Server is running on port 2000");  
});  
