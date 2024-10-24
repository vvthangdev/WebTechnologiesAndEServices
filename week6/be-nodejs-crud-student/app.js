const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const studentRouter = require("./routes/StudentRoutes");
app.use("/", studentRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;

const mongoose = require("mongoose");
dotenv.config();
const queryString =
  process.env.MONGODB_URI ||
  "mongodb+srv://vvthangdev:depVhmhrfEl8Xbyv@backend.sa56x.mongodb.net/?retryWrites=true&w=majority&appName=backEnd";

//configure mongoose
mongoose
  .connect(queryString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"));
mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error:", err.message);
});
