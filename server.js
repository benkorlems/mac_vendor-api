var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();
var cors = require("cors");

app.use(cors());
// Enable parsing of Json & urlencoded params
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(9000, function() {
  console.log("app running on port.", server.address().port);
});
