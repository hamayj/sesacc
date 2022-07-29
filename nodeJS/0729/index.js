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
            done( null, 'uploads/'); // 원하는 값은 콜백의 두번째 인자로 보내야 됨.
        },
        filename( req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext );
        },
    }),
    limits: { filesize: 5*1024*1024 }, // 5MB 제한.
});  // 이건 다 객체 형식으로 만들어준건가???


app.set("view engine", "ejs");
app.use( express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", test, test2, function(req,res){
    res.render('index');
}); // 미들웨어 test, test2 
// 경로와 함수 사이에 중간에 뭔가 처리하도록 하는 것을 미들웨어라고 함.
// 미들웨어 왜 배워? 파일을 업로드할 때, 파일을 업로드하기 위한 처리를 미들웨어에서 해줘야 함.

app.post("/upload", upload.single('userfile'), function(req,res){
    console.log(req.body);
    console.log(req.file);
    res.send("Upload");
    
}); // app.post는 라우터임. // upload.single 파일 하나만 받겠다.
// 

app.post("/upload/array", upload.array('userfile'), function(req, res){
    console.log(req.body);
    console.log(req.files); // files여야 됨.
    res.send("Upload Array");
});

app.post("/upload/fields", upload.fields([{name: 'userfile'}, {name: 'userfile2'}, {name:'userfile3'}]), function(req, res){
    // 파일을 하나씩 지정해줘야 돼서 번거롭기 때문에 잘 쓰지는 않음.
    console.log(req.body);
    console.log(req.files); 
    res.send("Upload Array");
}); 

function test(req, res, next) {
    console.log("Test함수");
    console.log(req.path); // 어떤 경로로 왔는가.
    req.aaa = "...";
    next();
}

function test2(req, res, next) {
    console.log("Test2 함수");
    console.log(req.aaa);
    next();
}

app.listen(port, ()=>{
    console.log("Server Port : ", port );
})

