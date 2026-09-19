// creating server 
const express = require("express");

const app = express()

app.use(express.json())


const notes = []
// api=post 
// data will enter through req.body
app.post('/notes', (req, res) => {
    console.log(req.body)
})
module.exports = app