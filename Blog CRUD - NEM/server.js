const express = require("express");
const connectDB = require("./utlis/database.js")
const BlogRoute = require("./routes/blog.route.js")


const app = express();

const PORT = 8080;
app.use(express.json());

app.use("/apiV1",BlogRoute)

app.listen(PORT, () => {
    connectDB()
  console.log("http://127.0.0.1:8080");
});
