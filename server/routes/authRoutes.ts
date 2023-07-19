import express from 'express'
import { register, login, updateUser } from "../controllers/authController.js";
import passport from 'passport'
import cors from 'cors';



const router = express.Router();

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/updateUser').post(updateUser)
router.route('/google').get(passport.authenticate("google", {
  scope: ["email", "profile"],
}))

router.get("/google/redirect", cors(), passport.authenticate("google"), (req, res) => {
    res.redirect('/');
  });

export default router;