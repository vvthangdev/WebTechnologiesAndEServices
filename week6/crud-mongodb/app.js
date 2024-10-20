const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Apllycation listening on port ${PORT}!`));