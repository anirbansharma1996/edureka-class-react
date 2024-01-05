const User = require("../models/auth.model.js");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).send("signed up successfully");
  } catch (error) {
    res.status(503).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isPresent = await User.findOne({ email, password });
    if (isPresent) {
      res.status(200).send("login successful");
    } else {
      res.status(404).send("invalid email or password");
    }
  } catch (error) {
    res.status(503).send(error.message);
  }
};

const allUsers = async(req,res)=>{
   try {
       const allUsers = await User.find()
        res.status(200).send(allUsers)
        
   } catch (error) {
    res.status(503).send(error.message);
   }
}




module.exports = { signup, login ,allUsers};
