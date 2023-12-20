const dotenv = require('dotenv')

dotenv.config()

const {APP_PORT,MYSQL_HOST,MYSQL_PORT, MYSQL_USER ,MYSQL_DATABASE, MYSQL_PASSWORD }= process.env;

module.exports={
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER ,
    MYSQL_DATABASE,
    MYSQL_PASSWORD 
}