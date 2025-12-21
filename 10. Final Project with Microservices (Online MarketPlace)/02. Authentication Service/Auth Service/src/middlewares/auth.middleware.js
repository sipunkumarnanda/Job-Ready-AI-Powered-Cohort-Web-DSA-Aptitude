

const jwt = require('jsonwebtoken')
const redis = require('../db/redis.js')


async function authMiddleware(req, res, next) {
  try {

    const token  = req.cookies?.token
    if(!token){
        return res.status(401).json({
            message : "Unauthorized"
        })
    }

    if (process.env.NODE_ENV !== "test") {
      try {
        const isBlacklisted = await redis.get(`blacklist:${token}`);
        if (isBlacklisted) {
          res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
          });
          return res.status(401).json({
            message: "Session expired. Please login again.",
          });
        }
      } catch (error) {
        console.error("Redis error in auth middleware ", error);
        return res.status(503).json({
          message: "Authentication service unavailable",
        });
      }
    }


    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // req.user = { id : decoded.id }

    const user = decoded
    req.user = user

    next()

  } catch (error) {
     return res.status(401).json({
            message : "Unauthorized user"
        })
  }
}

module.exports = {
    authMiddleware
}