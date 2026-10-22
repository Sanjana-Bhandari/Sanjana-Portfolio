const express = require('express');
const rateLimit = require('express-rate-limit');
const { createContact } = require('../controllers/contactController');

const router = express.Router();

// Max 10 submissions per IP per 15 minutes (spam protection)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests. Please try again later.' },
});

router.post('/', limiter, createContact);

module.exports = router;
