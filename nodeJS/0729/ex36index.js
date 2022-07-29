const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path"); 

const upload = multer({
    // dest: "uploads/" // dest : destination 업로드될 장소를 말해주는 것.
    storage : multer.diskStorage({
        destination(req, file, done) {
            done( null, 'uploads/'); 
        },
        filename( req, file, done) {
            const ext = path.extname(file.originalname);
            //확장자만 뽑아주는거...
            const id = req.body.id;
            done(null, id + ext );
        },
    }),
    limits: { filesize: 5*1024*1024 }, 
}); 


app.set("view engine", "ejs");
app.use( "/aa", express.static("uploads"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req,res){
    res.render('ex36index');
}); 

app.post("/upload", upload.single('userfile'), function(req,res){
    console.log(req.file);  //req.file ... file이 req에서 받아지는군
    const { filename } = req.file;
    console.log(filename);
    res.render("ex36upload", {filename: filename}); // 파일을 바로 볼 수 있는 방법?
}); 

app.listen(port, ()=>{
    console.log("Server Port : ", port );
})

