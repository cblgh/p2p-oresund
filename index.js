var express = require("express")
var http = require("http")
var path = require("path")
var logger = require("morgan")
var static = require("serve-static")
var bodyparser = require("body-parser")
var methodOverride = require("method-override")
var app = express()

var public = path.join(__dirname, "/public")

app.set("port", "8666")
app.set("view engine", "html")
app.use(logger("dev"))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(methodOverride())
app.use(static(path.join(public)))

app.get("/", function(req, res) {
    res.sendFile(path.join(public, "index.html"))
    res.render("index")
})

app.get("/conduct", function(req, res) {
    res.sendFile(path.join(public, "conduct.html"))
})

app.get("*", function(req, res) {
    res.redirect("/")
})

var server = http.createServer(app)
server.listen(app.get("port"), function(){
    console.log("Express server listening on port " + app.get("port"))
})

var log = console.log
