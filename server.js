var app = express();
var PORT = process.env.PORT || 3001;

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

var express = require("express");
var parser = require("body-parser");
var path = require("path");

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.text());
app.use(parser.json({ type: "application/vnd.api+json" }));
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
