//Image Post router
//Feel free to change whatever you want, move code into other files and/or completely delete this

const router = require('express').Router();
// const { memePost } = require('../controllers');
const multer = require('multer');
const { posts } = require('../controllers');

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
  const newImagePost = new ImagePosts({
    author: req.body.author,
    memeImage: req.file.originalname,
    caption: req.body.caption,
  });
  newImagePost
  .save()
  .then(() => res.json("New Image Posted!"))
  .catch((err) => res.status(400).json(`Error: ${err}`));
});

// //Request Find Image by id
// router.get("/:id", (req,res) => {
//   Images.findById(rteq.params.id)
//   .then((image) => res.json(image))
//   .catch((err) => res.status(400).json(`Error: ${err}`));
// });

//Request Find Post Image by ID and Update Post Image
router.put("/update/:id", upload.single("postName"), (req, res) => {
  posts.findbyId(req.params.id)
  .then((post) => {
    post.author = 
  })
})

module.exports = router;