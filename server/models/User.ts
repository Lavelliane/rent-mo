import mongoose, { Schema, Document } from "mongoose";
import validator from 'validator';

interface IUser extends Document {
  firstName: string;
  email: string;
  password: string;
  lastName: string;
  location: string;
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
  location: {
    type: String,
    maxlength: 20,
    trim: true,
    default: 'my city',
  },
});

export default mongoose.model<IUser>('User', UserSchema);
