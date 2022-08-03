const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); 
app.use(bodyParser.json());

const router = require("./routes"); // index가 가장 처음 이름. 설정안해도 찾음. (인덱스라서 파일명 안적은거) 
// 여기서 exports 한게 1개라서 이름 내 맘대로(router) 할 수 있어
// ㅠㅠ 드디어 알았..어... ㅠ

app.use("/user", router); // /user경로 들어오면 라우터로 가라고.. 미들웨어 들어오면 같은 req, res객체 사용할 수 있음.
// 경로를 "/"로 하면 / 경로일 때, 라우터로 가는거고, "/app"으로 하면 /app해야 나옴.
app.use("/sese", router); 
//따로 라우터?에서 sese경로로 지정해준게 있어야 보이는게 있을거야..^^

app.get("/", function(req,res){
    res.send("Index");
})

// router.get("/register", user.get_user); // 근데 이게 왜 user.get_user에서 나가는거지..? get_user는 usercontroller.js에 있는 함수인데.......(?)

app.listen(port, ()=>{
    console.log("Server Port : ", port );
})

// router.get("/", user.get_user);
