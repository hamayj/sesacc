const { Router } = require("express");
const express = require("express");
const userRouter = express.Router();
const user = require("../controller/userController");

userRouter.get("/", user.index);

userRouter.post("/register", user.post_user);
userRouter.post("/login", user.login);
userRouter.get("/login", user.login);


// userRouter.patch("/edit", user.patch_user)
// userRouter.patch("/update", user.update);

// userRouter.delete("/delete", user.delete);
module.exports = userRouter; // 우리가 매핑한 라우터가 모듈로 내보내졌음.