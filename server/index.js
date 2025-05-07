const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const BlogModel = require('./models/Blogs')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.post("/create", (req, res)=>{
    BlogModel.create(req.body)
    .then(blogs=> res.json(blogs))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("Server is running")
})