import mongoose from 'mongoose';

const { Schema } = mongoose;

const PollSchema = new Schema(
  {
    name: {
      type: String,
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export default mongoose.model('Poll', PollSchema);
