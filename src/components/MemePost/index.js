// Post component

//need to check type for edit img text? blob? see line 59

import React, { useState, useEffect } from "react";
import Likes from "../Likes";
import Dislikes from "../Dislike";
import * as MemePostService from "../../api/MemePostService";
import { func, string, array } from "prop-types";
import "./styles.css";
// import Comment from "../Comment";
// import CommentForm from "../CommentForm";

function Post({ id, getPostsAgain, img, author, caption, postComments }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedImg, setImg] = useState(img);
  const [editedAuthor, setAuthor] = useState(author);
  const [editedCaption, setCaption] = useState(caption);
  const [comments, setComments] = useState([]);

  const handleEdit = async () => {
    setIsEditing(!isEditing);
    
    if (isEditing) {
        let editedPost = {
            img: editedImg,
            author: editedAuthor,
            caption: editedCaption,
        };
        await MemePostService.update(id, editedPost);
        getPostsAgain();
    }
};

const handleDelete = async () => {
  await MemePostService.remove(id);
  getPostsAgain();
};

async function fetchComments(id) {
  let res = await MemePostService.getAllComments(id);
  if (res.status === 200) {
      setComments(res.data.data);
  }
}

useEffect(() => {
  fetchComments(id);
}, []);

return (
  <div>
      <div>
          {!isEditing && <h1>{img}</h1>}
          {isEditing && (
              <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={editedImg}
                  type="text"  // blob?
                  name="img"
                  placeholder="Image goes here"
              />
          )}
          <div>
                    <button onClick={handleEdit}>
                        {isEditing ? "SUBMIT" : "EDIT"}
                    </button>
                    <button onClick={handleDelete}>DELETE</button>
                </div>
            </div>
            {!isEditing && <p>By: {author}</p>}
            {isEditing && (
                <input
                    onChange={(e) => setAuthor(e.target.value)}
                    value={editedAuthor}
                    type="text"
                    name="author"
                    placeholder="User Name"
                />
            )}
            <div>
                {!isEditing && <p className="post-caption">{caption}</p>}
                {isEditing && (
                    <input
                        onChange={(e) => setBody(e.target.value)}
                        value={editedCaption}
                        type="text"
                        name="caption"
                        placeholder="Caption"
                    />
                )}
            </div>

}