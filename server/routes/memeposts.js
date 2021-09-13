// Users Router
const router = require('express').Router();
const { memePost } = require('../controllers');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./src/public/uploads/")
  }
})

module.exports = router;
