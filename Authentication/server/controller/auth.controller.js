const User = require("../model/auth.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//SIGNUP
const Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userIsPresent = await User.findOne({ email });

    if (userIsPresent) {
      return res.status(404).send("User already exist...");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).send("signedup successfully");
  } catch (error) {
    res.status(503).send("Something went wromg ... ");
    console.log(error.message);
  }
};

//LOGIN
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userIsPresent = await User.findOne({ email });

    if (!userIsPresent) {
      return res.status(404).send("User not found ... ");
    }
    const matchPassword = await bcrypt.compare(
      password,
      userIsPresent.password
    );

    if (matchPassword) {
      const token = jwt.sign(
        {
          id: userIsPresent._id,
          name: userIsPresent.name,
        },
        "SECRET321",
        { expiresIn: "1hr" }
      );
      const { password: omitpassword, ...otherData } = userIsPresent.toObject();

      return res
        .status(200)
        .send({ message: "login success", token: token });
    } else {
      res.status(404).send("invalid password");
    }
  } catch (error) {
    res.status(503).send(error.message);
  }
};

module.exports = { Signup, Login };
