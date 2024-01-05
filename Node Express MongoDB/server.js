const express = require("express");
const connectDB = require("./utlis/database.js")

const authRoute = require("./routes/auth.route.js")

const server = express();
const PORT = 8080

// server.use(express.urlencoded({ extended: true }));
server.use(express.json());


server.use("/apiV1",authRoute)

server.listen(PORT, () => {
    connectDB()
  console.log(`http://127.0.0.1:${PORT}`);
});
