const multer = require('multer');
const path = require('path');

// Set storage options for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/artists/');  // Specify the directory where images will be stored
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));  // Generate a unique filename
  }
});

// Filter to accept only image files
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Only image files are allowed'), false);
  }
  cb(null, true);
};

// Initialize multer upload middleware
const upload = multer({ storage, fileFilter });

module.exports = upload;
