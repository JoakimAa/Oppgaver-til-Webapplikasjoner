import mongoose from 'mongoose';
import validator from 'validator';

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
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
