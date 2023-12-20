const {NAME_OR_PASSWORD_IS_REQUIRE,IS_INCLUDES_SAME_NAME}  = require("../constants/error-types")
const verifyUser =async (ctx,next)=>{
    const {name,password} = ctx.request.body;
    //账号或者密码不存在
    if(!name ||!password){
    const err = new Error(NAME_OR_PASSWORD_IS_REQUIRE)
       return ctx.app.emit("error",err,ctx)
    }
    //判断密码是否和数据库一致（待添加逻辑）
    await next()
}

module.exports = {
    verifyUser
}