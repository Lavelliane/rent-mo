import express from 'express'
import { register, login, updateUser } from "../controllers/authController.js";
import passport from 'passport'
import User from '../models/User.js';
import attachCookies from '../utils/attachCookies.js';



const router = express.Router();

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/updateUser').post(updateUser)

router.route('/google').get(passport.authenticate("google", {
  scope: ["email", "profile"],
}))

router.route("/google/redirect").get(passport.authenticate("google"), async (req, res) => {
  // const user = await User.findOne({email: req?.user?.email})
  // const token = user?.createJWT()
  // attachCookies({res, token })
  res.redirect('/')
});

router.route('/google/logout').get((req, res) => {
  req.logout(() => {
    res.redirect('/landing')
  });
  
})

router.route('/current_user').get((req, res) => {
  const { user } = req
  console.log(user)
})

export default router;