import express from "express";
import {
  getRegisterController,
  postRegisterController,
  getLoginController,
  postLoginController,
  userLogout
} from "../controllers/auth.controller.js";

const router = express.Router();

// router.get('/register', getRegisterController)
// router.post('/register', postRegisterController)

router.route("/register")
  .get(getRegisterController)
  .post(postRegisterController)

  router.route('/login')
  .get(getLoginController)
  .post(postLoginController)

router.route('/logout')
.get(userLogout)

export default router;
