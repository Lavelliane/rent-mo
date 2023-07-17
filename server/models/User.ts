import mongoose, { Schema, Document } from "mongoose";
import validator from 'validator';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

declare var process : {
  env: {
    JWT_SECRET: string,
    JWT_LIFETIME: string
  }
}
interface IUser extends Document {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  password: string;
  country: string;
  state: string;
  city: string;
  phoneNumber: string;
  createJWT: () => void;
}

const emailValidator = (email: string) => {
  return validator.isEmail(email);
};

const UserSchema: Schema<IUser> = new Schema({
  firstName: {
    type: String,
    required: [true, "Please provide a name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: 'Lastname',
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    validate: {
      validator: emailValidator,
      message: "Please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    select: false,
  },
  country: {
    type: String,
    maxlength: 20,
    trim: true,
    default: 'Philippines',
  },
  state: {
    type: String,
    maxlength: 20,
    trim: true,
    default: 'Cebu',
  },
  city: {
    type: String,
    maxlength: 20,
    trim: true,
    default: 'Cebu City',
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value: string) => validator.isMobilePhone(value, 'any', { strictMode: false }),
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
});

//User.js
UserSchema.pre('save', async function(){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function() {
  return jwt.sign({
   userId: this._id
  }, process.env.JWT_SECRET , {
    expiresIn: process.env.JWT_LIFETIME 
  });
}

export default mongoose.model<IUser>('User', UserSchema);
