const connection = require("../app/database")
class UserService {
    //1、创建用户
    async create(user){
        const {name,password} = user
        const statement = "INSERT INTO users (name, password) VALUES (?, ?);";
        const res = await connection.execute(statement,[name,password])
        return res[0]
    }
    //2、查看数据库是否已存在用户名相同的数据
    async isInCludeName(name){
        const statement = `SELECT * FROM users WHERE name = ?;`
        const res = await connection.execute(statement,[name])
        return res[0]
    }
}
module.exports = new UserService()