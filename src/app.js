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
// -------post-----------//
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

// // /-----delete----/
// -----------------this is workflow of delete----------------///
// DELETE /notes/2
//        ↓
// :index = 2
//        ↓
// req.params.index = 2
//        ↓
// index = 2
//        ↓
// delete notes[2]
//        ↓
// Note deleted
//        ↓
// status 200
//        ↓
// JSON response
// delete/notes/1
// here note is the static notes after/ is a dynamic is know as the params
// 1 is the index value
// ---/:index is a dynamic
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index
    delete notes[index]
    res.status(200).json({
        message: "note deleted successfully"
    })
})
module.exports = app