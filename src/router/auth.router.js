const Router = require("koa-router")
const AuthController = require("../controller/auth.middleware")
const authRouter = new Router();
const {verifyUser} = require("../middleware/auth.middleware")
//中间件对登陆进行校验
authRouter.post("/login",verifyUser,AuthController.login)

module.exports =authRouter