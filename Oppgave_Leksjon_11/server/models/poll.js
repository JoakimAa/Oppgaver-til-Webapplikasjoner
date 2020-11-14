import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const PollSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    userId: {
      type: String,
      ref: 'User',
      required: true,
    },
    slug: String,
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

PollSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

export default mongoose.model('Poll', PollSchema);
