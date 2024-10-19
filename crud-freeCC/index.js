const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

app.get("/", (req, res) => {
  res.send("Hello from Node API")
})

mongoose
  .connect(
    "mongodb+srv://vvthangdev:depVhmhrfEl8Xbyv@backend.sa56x.mongodb.net/?retryWrites=true&w=majority&appName=backEnd"
  )
  .then(() => {
    console.log("Connected to database!")
  })
  .catch(() => {
    console.log("Connection failed!")
  })
