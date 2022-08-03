// 라우터를 정의할 거임( 경로를 정의할거임)
// 라우터는 매핑해주는 곳!

const express = require("express");
const userRouter = express.Router(); // 익스프레스 안의 라우터 함수 이용
const user = require("../controller/UserController") // 아 .. 여기서 컨트롤러에서 불렀었구나...

// router.get("/a", function(req,res){
//     res.send("Index");
// })

userRouter.get("/", user.index);
userRouter.get("/register", user.register);
userRouter.post("/register", user.post_register);

userRouter.get("/login", user.login);
userRouter.post("/login", user.post_login)

// 모듈로 내보내는 방법. module.exports 
module.exports = userRouter; // 우리가 매핑한 라우터가 모듈로 내보내졌음. 




