const jwt = require("jsonwebtoken");
const redis = require('../db/redis.js')

function createAuthMiddleware(roles = ["user"]) {
  
  return async function authMiddleware(req, res, next) {
    const token =
      req.cookies?.token || req.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Authentication token is missing",
      });
    }

    try {
      try {
        const isBlacklisted = await redis.get(`blacklist:${token}`);

        if (isBlacklisted) {
          res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
          });

          return res.status(401).json({
            message: "unauthorized : Token has been revoked",
          });
        }
      } catch (error) {
        console.error("Redis error in auth middleware:", error);
        return res.status(503).json({
          message: "Authentication service unavailable",
        });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (!roles.includes(decoded.role)) {
        return res.status(403).json({
          message: "forbidden : Insufficient permissions",
        });
      }

      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({
        message: "unauthorized : Invalid token",
      });
    }
  };
}

module.exports = createAuthMiddleware;
