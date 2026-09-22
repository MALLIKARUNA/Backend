// creating server 
const express = require("express");

const app = express()

// it is  usefull for  dataset 
// data will come form req.body
app.use(express.json())// express json is a midleware 
const notes = []
// api=post 
// data will enter through req.body
// when we are using body we must use the midleware 
app.post('/notes', (req, res) => {
    notes.push(req.body)

    res.status(201).json({
        message: "note created successfully"
    })
})
// -------api=get--------------//
app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "note fatched successfully",
        notes: notes
    })


})
module.exports = app