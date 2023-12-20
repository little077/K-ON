const koa = require("koa")
const importAndUseRoutesFromFolder  = require("../utils/importAndUseRoutesFromFolder.js")
const bodyParser = require("koa-bodyparser");
const errorHandle= require("./error-handle.js") 

const app = new koa();
app.importAndUseRoutesFromFolder = importAndUseRoutesFromFolder;
app.importAndUseRoutesFromFolder()
app.use(bodyParser())
app.on("error",errorHandle)

module.exports =app;