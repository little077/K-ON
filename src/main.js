const app = require("./app/app")

const {APP_PORT} = require("./app/config")


app.listen(APP_PORT,()=>{
    console.log(`服务器启动在${APP_PORT}端口`)
})