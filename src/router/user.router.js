const Router = require("koa-router")
const  {create}=require("../controller/user.controller.js") 
const {verifyUser,handlePassword} = require("../middleware/user.middleware.js")
const userRouter = new Router({prefix: "/users"});

//中间件对账号密码验证，加密
userRouter.post("/",verifyUser,handlePassword,create)

module.exports =
    userRouter
