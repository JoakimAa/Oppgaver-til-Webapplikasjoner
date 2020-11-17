import mongoose from 'mongoose';

const { Schema } = mongoose;

const PollSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },

    question: {
      type: String,
      required: true,
    },

    yes: {
      type: Number,
      default: 0,
    },
    no: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export default mongoose.model('Poll', PollSchema);
