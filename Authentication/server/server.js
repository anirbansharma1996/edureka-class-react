const express = require('express')
const cors = require('cors')
const connectDB = require("./utlis/db.js")
const AuthRoute = require('./route/auth.route.js')

const PORT = 8008

const app = express()
app.use(cors())
app.use(express.json())

app.use("/v1",AuthRoute)

app.listen(PORT,()=>{
    connectDB()
    console.log(`http://127.0.0.1:${PORT}`)
})


