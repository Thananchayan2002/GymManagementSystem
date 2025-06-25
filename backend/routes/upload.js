const express = require('express');
const upload = require('../middleware/multerConfig');

const uploadCloud = express.Router();

uploadCloud.post('/upload', upload.single('image'), (req, res) => {
  try {
    res.json({
      imageUrl: req.file.path,
      publicId: req.file.filename,
    });
  } catch (err) {
    res.status(500).json({ error: 'Image upload failed.' });
  }
});

module.exports = uploadCloud;
