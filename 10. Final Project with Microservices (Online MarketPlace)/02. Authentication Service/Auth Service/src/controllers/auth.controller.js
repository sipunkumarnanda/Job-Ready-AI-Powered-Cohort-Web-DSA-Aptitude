const userModel = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const redis = require('../db/redis.js')

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
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: true ,
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(201).json({
    message : "User registered successfully",
    user : {
      id : user._id,
      username : user.username,
      email : user.email,
      fullName : user.fullName,
      role : user.role ,
      addresses : user.addresses
    }
  })
  } catch (error) {
    console.error("Error in register user ", error)
    res.status(500).json({
        message : "Internal server error"
    })
  }
}

async function loginUser(req, res) {
  try {
    const {username, email, password} = req.body
    
    const user = await userModel.findOne({
      $or : [{username}, {email}]
    }).select("+password")

    if(!user){
      return res.status(401).json({
        message : "Invalid credentials"
      })
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
      return res.status(401).json({
        message : "Invalid credentials"
      })
    }


    const token = jwt.sign({
      id : user._id,
      username : user.username,
      email : user.email,
      role : user.role
    }, process.env.JWT_SECRET, {
      expiresIn : "1d"
    })

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message : "User loggedin successfully",
      user : {
        id : user._id,
      username : user.username,
      email : user.email,
      role : user.role,
      fullName : user.fullName,
      address : user.addresses
      }
    })

  } catch (error) {
    console.error("Error in login user ", error)
    return res.status(500).json({
      message : "Internal server error"
    })
  }
}

async function getCurrentUser(req, res) {
  try {
    const user = req.user
    res.status(200).json({
      message : "User fetched successfully",
      user
    })
  } catch (error) {
    console.error("Error in getCurrentUser ", error)
    return res.status(500).json({
      message : "Internal server error"
    })
  }
}


// Logout User
async function logoutUser(req, res) {
  try {
     const token = req.cookies.token
  if(token){
   // blacklist in redis
   await redis.set(`blacklist:${token}`, 'true', 'EX', 24*60*60) // expires in 1 day
  }

  res.clearCookie('token', {
    httpOnly : true,
    secure : true,
    sameSite: "strict"
  })

  return res.status(200).json({
    message : "logged out successfully"
  })
  } catch (error) {
    console.error("Error in logout user ", error)
    return res.status(500).json({
      message : "Internal server error"
    })
  }
}


async function addUserAddress(req, res) {
  try {
    const { street, city, state, zip, country } = req.body;

    const address = { street, city, state, zip, country };

    const id = req.user.id;

    const user = await userModel.findById(id);

    const alreadyExists = user.addresses.some((addr) => {
      return (
        addr.street === street &&
        addr.city === city &&
        addr.state === state &&
        addr.zip === zip &&
        addr.country === country
      );
    });

    if (alreadyExists) {
      return res.status(409).json({
        message: "Address already exists",
      });
    }

    user.addresses.push(address);
    await user.save();

    res.status(201).json({
      message: "Address add successfully",
      address: user.addresses,
    });
  } catch (error) {
    console.error("Error in addUserAddress ", error);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
}

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  addUserAddress
};
