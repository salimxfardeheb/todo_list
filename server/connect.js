const mysql = require("mysql");

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "",
  database: "Todo_List",
  password: "salim123",
});

connect.connect(function (err) {
  if (err) console.log("error occured while connecting");
  else console.log("database connected succesfully !");
});

module.exports = { connect };