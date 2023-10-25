
import aws from 'aws-sdk'

var mysql = require("mysql2");
const db = mysql.createPool({
  host: "database-1.crsko3wmlgbz.ap-northeast-2.rds.amazonaws.comzz",
  user: "gyeongjin",
  password: "00",
  database: "ICT_TEAM",
  port: 3306,
});

AWS.config.update({
  region: "ap-northeast-2",
  accessKeyId: process.env.AWS_ ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3()

module.exports = db;
