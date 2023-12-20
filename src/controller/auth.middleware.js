

class AuthController {
  async login(ctx,next){
    return ctx.body = "登陆成功"
  }
}


module.exports = new AuthController();