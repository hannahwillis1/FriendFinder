var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "pxc702aijgiszaav",
    password: "et3vq20vmncgbo0g",
    database: "nwwdvj2cuqpdqvwo"
  });
}
