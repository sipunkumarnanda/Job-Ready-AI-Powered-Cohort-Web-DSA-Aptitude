import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

async function getRegisterController(req, res) {
  res.render("register");
}

async function postRegisterController(req, res) {
  const { username, email, password } = req.body;
  const isUserExists = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (isUserExists) {
    return res.status(400).json({
      message: "User already exists with this username and email",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE);

  res.cookie("token", token);

  // res.status(201).json({
  //   message: "user registered successfully",
  //   user,
  // });

  res.redirect("/auth/login")
}

async function getLoginController(req, res) {
    res.render("login")
}

async function postLoginController(req, res) {
    const {identifier, password} = req.body

    const user = await userModel.findOne({
        $or : [
            {email : identifier},
            {username : identifier}
        ]
    })

    if(!user){
       return res.redirect('/login?error=User not found')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
         res.status(400).json({
            message : "Invalid password"
         })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE);

    res.cookie("token", token)

    // res.status(201).json({
    //     message : "user loggedin successfully",
    //     user
    // })

   res.redirect("/")
}

async function userLogout(req, res) {
   res.clearCookie('token')
   return res.redirect('/auth/login')
}

export { getRegisterController, postRegisterController, getLoginController, postLoginController, userLogout};
