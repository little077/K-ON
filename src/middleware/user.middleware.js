const {NAME_OR_PASSWORD_IS_REQUIRE,IS_INCLUDES_SAME_NAME}  = require("../constants/error-types")
const md5Hash = require("../utils/handlePassword")
const userService= require("../service/user.service")
const verifyUser =async (ctx,next)=>{
    const {name,password} = ctx.request.body;
    //1、判断name和password是否为空
    if(!name|| !password){
       const err = new Error(NAME_OR_PASSWORD_IS_REQUIRE)
       return ctx.app.emit("error",err,ctx)
    }
    
    //2、判断是否存在相同用户名
    const res  = await userService.isInCludeName(name)
    if(res.length){
        const err = new Error(IS_INCLUDES_SAME_NAME)
        return ctx.app.emit("error",err,ctx)
    }
    await  next()
}
//处理密码加密中间件逻辑
const handlePassword = async(ctx,next)=>{
    const {password} =ctx.request.body;
    ctx.request.body.password = md5Hash(password)
    await next()
}
module.exports = {
    verifyUser,
    handlePassword
}