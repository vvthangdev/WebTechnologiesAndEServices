const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
    res.send("Hello World2!");
})

// const PORT = 8080

// app.listen(PORT, ()=> {
//     console.log('Server dang chay tai port: ${PORT} ');
// });

// const PORT = 8081;
const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
    console.log(`Server đang chạy tại port: ${PORT}`);
});

