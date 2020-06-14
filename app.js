const express = require("express")
const mongodb = require("mongodb")
const mongoose = require("mongoose")
const app = express()

const url = "mongodb://localhost/simpledb"

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('open', () => {
    console.log("Connection established...")
})

app.use(express.json)

const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)


app.listen(9000, () => {
    console.log("Server running now");
})
