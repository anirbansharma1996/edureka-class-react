const mongoose = require("mongoose")

const connectDB=async()=>{
  try {
    await mongoose.connect("mongodb+srv://anirban:anirban2022@cluster0.pdsxni8.mongodb.net/Blog")
    console.log("connect to database")
  } catch (error) {
    console.log(error.message)
  }
}

module.exports=connectDB