const router = require('express').Router();
const { memePost } = require('../controllers');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/uploads/")
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
})

const upload = multer({storage: storage});


//Request Add New Image
router.post("/", upload.single("memeImage"), (req, res) => {
  const newPost = new Posts({
    author: req.user
  })
})

module.exports = router;