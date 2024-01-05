const express = require("express");
const { signup, login,allUsers } = require("../controllers/auth.controller.js");

const route = express();

route.get("/",allUsers)
route.post("/signup", signup);
route.post("/login", login);

module.exports = route;
