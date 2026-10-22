const Contact = require('../models/Contact');

// POST /api/contact
exports.createContact = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;
    const saved = await Contact.create({ name, email, phone, message });
    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      id: saved._id,
    });
  } catch (err) {
    next(err);
  }
};
