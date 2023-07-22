import passport from "passport";
import passportGoogle from "passport-google-oauth2";
import User, { IUser } from "../models/User";
import crypto from "crypto";
import dotenv from 'dotenv';

dotenv.config();

declare const process : {
  env: {
    GOOGLE_CLIENT_ID: string,
    GOOGLE_CLIENT_SECRET: string
  }
}


const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5173/api/v1/auth/google/redirect",
      passReqToCallback: true
    },
    async (req: any, accessToken: any, refreshToken: any, profile: any, done: any) => {
      const user = await User.findOne({ googleId: profile.id });

      // If user doesn't exist creates a new user. (similar to sign up)
      if (!user) {
        const newUser = await User.create({
          id: profile.id,
          firstName: profile.displayName,
          email: profile.emails?.[0].value,
          password: crypto.randomBytes(64).toString('hex'),
          country: 'Philippines', 
          state: 'NCR', 
          city: 'Metro Manila', 
          phoneNumber: '09123456789'
          
        });
        if (newUser) {
          done(null, newUser);
        }
      } else {
        done(null, user);
      }
    }
  )
);
