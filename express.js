
const express = require('express');
// this is the creating a sever
const app = express()

// programing a server
app.get("/", (req, res) => {
    res.send("hello mallikarjun alyal today i am learning the backend")
})
app.get("/about", (req, res) => {
    res.send("i am building a small projects on this backend coruse")
})
app.get("/men", (req, res) => {
    res.send("this men section u can perchase only shirt and t-shirt and gens")
})
app.get("/women", (req, res) => {
    res.send("this is women section to purchase the cloth")
})
app.get("/Skill", (req, res) => {
    res.send("this skill is missing u have to learn it ")
})
// start the server
// 3000 is port of starting the server
app.listen(3000);  