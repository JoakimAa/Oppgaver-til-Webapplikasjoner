import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      min: ['3', 'Navn må bestå av flere enn 3 tegn'],
      max: ['20', 'Navn må være under 20 tegn'],
    },
    password: {
      type: String,
      required: [true, 'Fyll ut passord'],
      min: ['6', 'Passord må bestå av flere enn 6 tegn'],
      select: false,
    },
    email: {
      type: String,
      required: [true, 'Fyll ut epost'],
      unique: true,
      validate: [validator.isEmail, 'Eposten er ikke gyldig'],
    },
    role: {
      type: String,
      enum: {
        values: ['user', 'admin'],
        message: 'Rolle ikke fylt ut',
      },
      default: 'user',
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
});

UserSchema.methods.comparePassword = async function (password) {
  console.log(password);
  const result = argon2.verify(this.password, password);
  return result;
};

UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

export default mongoose.model('User', UserSchema);
