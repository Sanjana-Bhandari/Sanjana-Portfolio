const notFound = (req, res) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.originalUrl}` });
};

const errorHandler = (err, req, res, next) => {
  // Mongoose validation errors -> 400 with readable message
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((e) => e.message).join(', ');
    return res.status(400).json({ success: false, message });
  }
  console.error(err);
  res.status(500).json({ success: false, message: 'Something went wrong on the server.' });
};

module.exports = { notFound, errorHandler };
