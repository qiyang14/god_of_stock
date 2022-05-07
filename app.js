var express = require("express");
var path = require("path");

var app = express();

var http = require('http');
var fs = require('fs');

app.set("port", process.env.PORT || 4200);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));

app.use(express.static(__dirname + '/public'));

app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
})