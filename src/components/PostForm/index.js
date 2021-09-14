//NOTES:
//check to see memeImage is string? 
//check input type for memeImage. Use blob? 
//check if we want user first name and last name
//use caption or content? 

import React, { useState } from "react";
import "./styles.css";
import { func } from "prop-types";
import * as PostService from "../../api/PostService";

const PostForm = ({ getPostsAgain, user }) => {
  const [memeImage, setFileName] = useState("");
  const [caption, setCaption] = useState(""); //caption or content? *****************

  const handleSubmit = async () => {
    let newPost = { memeImage, author: user._id, caption };
    const res = await PostService.create(newPost);

    if (res.status === 201) {
      setFileName("");    //check to see memeImage is an empty string? *************************
      setCaption(""); //caption or content? ******************
      getPostsAgain();
  } else {
      alert("Server Error");
  }
};  

if (!user) {
  return <div />;
}

return (
  <div>
      <input
          onChange={(e) => setFileName(e.target.value[0])}
          value={memeImage}
          type="text"  // blob? ********************************
          name="memeImage"
          placeholder="Upload"
      />
        <p> 
          {user.firstName} {user.lastName}
      </p>
      <input
                onChange={(e) => setCaption(e.target.value)} //caption or content? *******
                value={caption} //caption or content?***********
                type="text"
                name="caption" //caption or content?*******************
                placeholder="Your Caption Here"
            />

      <button onClick={handleSubmit}> Post Image </button>
        </div>
    );
};

PostForm.propTypes = {
  getPostsAgain: func,
};

export default PostForm;