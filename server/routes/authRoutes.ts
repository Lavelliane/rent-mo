import express from 'express'
import { register, login, updateUser } from "../controllers/authController.js";
import passport from 'passport'



const router = express.Router();

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/updateUser').post(updateUser)
router.route('/google').get(passport.authenticate("google", {
  scope: ["email", "profile"],
}))

router.route("/google/redirect").get(passport.authenticate("google",  {
  successRedirect: '/',
  failureRedirect: '/landing'
}));

export default router;