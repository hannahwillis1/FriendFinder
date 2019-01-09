var express = require("express");
var parser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3001;

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
// require("mysql://pxc702aijgiszaav:et3vq20vmncgbo0g@y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/nwwdvj2cuqpdqvwo")(
//   app
// );

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.text());
app.use(parser.json({ type: "application/vnd.api+json" }));
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
