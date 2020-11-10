import { timeStamp } from 'console';
import mongoose from 'mongoose';

const {Schema} = mongoose;

const UserSchema =  new Schema (
    {
        id: {
            type: Number,
        },
        username: {
            type: String,
            required: true,
            trim: true,
            min: ['3', 'Navn må bestå av flere enn 3 tegn'],
            max: ['20', "Navn må være under 20 tegn"],
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    {timeStamp: true}

);

export default mongoose.model('User', UserSchema);