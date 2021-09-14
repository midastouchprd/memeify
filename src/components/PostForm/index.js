//NOTES:
//check if we want user first name and last name
//use caption or content or comments? 
//This is probably the Post Form 
// -->MUST<-- have encType="multipart/form-data" in the form otherwise uploading an image WILL NOT WORK!

import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [author, setAuthor] = useState("");
  const [caption, setCaption] = useState("");
  const [comments, setComments] = useState("");
  const [fileName, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.file[0]);
  }

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();
      
    formData.append("author", author);
    formData.append("caption", caption);
    formData.append("comments", comments);
    formData.append("postImage", fileName);
    
    setAuthor("");
    setCaption("");
    setComments("");

    axios
      .post("/posts/add", formData)
      .then((res) => setComments(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="img-Container">
      <h1>Add New Post</h1>
      <span className="caption">{caption}</span>
      <form onSubmit={changeOnClick} encType="multipart/form-data"> 
        <div className="form-group">
          <label htmlFor="author"> Author Name </label>
          <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="form-control"
          placeholder="User Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="caption"> Caption </label>
          <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="form-control"
          rows="5"
          placeholder="Add a Caption"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="file"> Choose Your Image </label>
          <input 
          type="file" 
          filename="postImage" 
          className="form-control-file" 
          onChange={onChangeFile}
          />
        </div>

        <button type="submit" className="btn btn-primary"> Post! </button>
      </form>
    </div>
  );
};

export default PostForm;

// import React, { useState } from "react";
// import "./styles.css";
// import { func } from "prop-types";
// import * as PostService from "../../api/PostService";

// const PostForm = ({ getPostsAgain, user }) => {
//   const [memeImage, setFileName] = useState("");
//   const [caption, setCaption] = useState(""); //caption or content? *****************

//   const handleSubmit = async () => {
//     let newPost = { memeImage, author: user._id, caption };
//     const res = await PostService.create(newPost);

//     if (res.status === 201) {
//       setFileName("");    //check to see memeImage is an empty string? *************************
//       setCaption(""); //caption or content? ******************
//       getPostsAgain();
//   } else {
//       alert("Server Error");
//   }
// };  

// if (!user) {
//   return <div />;
// }

// return (
//   <div>
//       <input
//           onChange={(e) => setFileName(e.target.value[0])}
//           value={memeImage}
//           type="text"  // blob? ********************************
//           name="memeImage"
//           placeholder="Upload"
//       />
//         <p> 
//           {user.firstName} {user.lastName}
//       </p>
//       <input
//                 onChange={(e) => setCaption(e.target.value)} //caption or content? *******
//                 value={caption} //caption or content?***********
//                 type="text"
//                 name="caption" //caption or content?*******************
//                 placeholder="Your Caption Here"
//             />

//       <button onClick={handleSubmit}> Post Image </button>
//         </div>
//     );
// };

// PostForm.propTypes = {
//   getPostsAgain: func,
// };

// export default PostForm;