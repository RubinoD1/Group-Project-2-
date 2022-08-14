const router = require('express').Router();
const sequelize = require('../config/connection');
const { Product, Category, Tag, ProductTag } = require('../models');


const multer = require('multer');
const storage = multer.diskStorage({
        destination: function ( req, file , cb ) {
                cb(null, './public/images') ;
        },
        filename : function ( req , file , cb ) {
                cb(null, (new Date().getFullYear()).toString()
                        +(new Date().getMonth()+1).toString()
                        +(new Date().getDate()).toString()
                        +(new Date().getHours()).toString()
                        +(new Date().getMinutes()).toString()
                        +(new Date().getSeconds()).toString()
                        +file.originalname.slice(-4) ) ;
        }
});
const fileFilter = ( req, file, cb ) => {

        if ( file.mimetype === "image/jpeg"
                || file.mimetype === "image/jpg"
                || file.mimetype === "image/png"
                || file.mimetype === "image/gif"
        ) {
                cb(null, true);
        } else {
                cb(null, false);
        }
}

const upload = multer({
        storage: storage,
        fileFilter: fileFilter
});



router.get("/:id",(req,res)=>{
  html = "<html>";
  html += "<body>";
  html += "<figure class='image-container'>";
  html += "<img id='chosen-image'>";
  html += "<figcaption id='file-name'></figcaption>";
  html += "</figure>";
  html += "<form action='/upload' method='post' enctype='multipart/form-data'>";
  html += "<input type='file' id='img' name='img' accept='image/*' />";
  html += "<input type='submit' />";
  html += "</form>";
  html += "<script>";
  html += "let fileElement = document.getElementById('img');";
  html += "let chosenImage = document.getElementById('chosen-image');";
  html += "let fileName = document.getElementById('img');";

  html += "fileElement.onchange = () => {";
  html += "let reader = new FileReader();";
  html += "reader.readAsDataURL(fileElement.files[0]);";
  html += "reader.onload = () => {";
  html += "     chosenImage.setAttribute('src',reader.result);}}";
 // html += "fileName.textContent = fileElement.files[0].name;}";
  html += "</script>";
  html += "</body>";
  html += "</html>";
        res.send(html);
});
router.post("/",upload.array('img',1), (req,res,next)=>{
        let now=new Date();
        console.log((new Date().getFullYear()).toString()+(new Date().getMonth()+1).toString()+(new Date().getDate()).toString()+(new Date().getHours()).toString()+(new Date().getMinutes()).toString()+(new Date().getSeconds()).toString()+req.files[0].originalname.slice(-4) );
        res.status(201).send();



});


module.exports = router;
