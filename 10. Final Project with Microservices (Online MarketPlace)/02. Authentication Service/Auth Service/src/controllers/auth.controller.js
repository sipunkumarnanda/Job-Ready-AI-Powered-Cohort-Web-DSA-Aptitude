const userModel = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  try {
    const { username, email, password, fullName: { firstName, lastName } } = req.body;
    
    // console.log(username, email, password, firstName, lastName);

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User or email already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hashedPassword,
    fullName: { firstName, lastName },
  });
  // console.log(user);

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRETE,
    { expiresIn: "1d" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: true ,
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(301).json({
    message : "User registered successfully"
  })
  } catch (error) {
    console.error("Error in register user ", error)
    res.status(500).json({
        message : "Internal server error"
    })
  }
}

module.exports = {
  registerUser,
};
