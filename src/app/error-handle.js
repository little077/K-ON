const errorTypes = require("../constants/error-types");
const errorHandle = (err, ctx) => {
  let status, message;
  switch (err.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRE:
      status = 400;
      message = "用户名或者密码不能为空";
      break;
    case errorTypes.IS_INCLUDES_SAME_NAME:
        status = 409;
        message = "已存在相同用户名称";
        break;
    default:
      status = 404;
      message = "NOT FOUND";
  }
  ctx.status = status;
  ctx.body = message;
};

module.exports = errorHandle;
