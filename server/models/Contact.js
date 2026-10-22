const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is required'], trim: true, maxlength: 80 },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [/^[+]?[\d\s-]{7,15}$/, 'Please enter a valid phone number'],
    },
    message: { type: String, required: [true, 'Message is required'], trim: true, maxlength: 1500 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
