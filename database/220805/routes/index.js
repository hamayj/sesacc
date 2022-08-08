// 라우터를 정의할 거임( 경로를 정의할거임)
// 라우터는 매핑해주는 곳!

const { Router } = require("express");
const express = require("express");
const visitorRouter = express.Router();
const visitor = require("../controller/VisitorController");

visitorRouter.get("/", visitor.get_visitors);
visitorRouter.post("/write", visitor.post_comment); // 라우터에서 write경로에서 어떤 함수를 쓸것이다라고 지정해뒀음 ( 이 함수가 컨트롤러에 존재해야 함. )

visitorRouter.get("/get", visitor.get_visitor);
// 모듈로 내보내는 방법. module.exports 

visitorRouter.patch("/edit", visitor.patch_comment);
visitorRouter.delete("/delete", visitor.delete_comment);
module.exports = visitorRouter; // 우리가 매핑한 라우터가 모듈로 내보내졌음. 

