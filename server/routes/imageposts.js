//Image Post router
//Feel free to change whatever you want, move code into other files and/or completely delete this
//Some may need to go in the comments controller? memePost controller?

const router = require('express').Router();
// const { memePost } = require('../controllers');
const multer = require('multer');
// const { posts } = require('../controllers');

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

// //Request Find Post by Id
// router.get("/:id", (req,res) => {
//   Posts.findById(req.params.id)
//   .then((posts) => res.json(posts))
//   .catch((err) => res.status(400).json(`Error: ${err}`));
// });

//Request Find Post Image by ID and Update Post Image
router.put("/update/:id", upload.single("postName"), (req, res) => {
  posts.findbyId(req.params.id)
  .then((post) => {
    post.author = req.body.author;
    post.post = req.body.post;
    post.memeImage = req.file.originalname;
  })
})

module.exports = router;