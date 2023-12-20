const UserService = require("../service/user.service")

class UseController {
  async create(ctx,next){
    const user = ctx.request.body
    const res = await UserService.create(user)

    return ctx.body = res
  }
}


module.exports = new UseController();