//NOTES:
//need to check type for edit memeImage text? blob? 
//use caption or content?
//check all comments to match up with Jonathon Flores comments work

import React, { useState, useEffect } from "react";
import Likes from "../Likes";
import Dislikes from "../Dislike";
import * as PostService from "../../api/PostService";
import { func, string, array } from "prop-types";
import "./styles.css";
// import Comment from "../Comment";
// import CommentForm from "../CommentForm";

function Post({ id, getPostsAgain, memeImage, author, caption, postComments }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedImg, setImg] = useState(memeImage);
  const [editedAuthor, setAuthor] = useState(author);
  const [editedCaption, setCaption] = useState(caption); //caption or content? *************
  const [comments, setComments] = useState([]);

  const handleEdit = async () => {
    setIsEditing(!isEditing);
    
    if (isEditing) {
        let editedPost = {
            memeImage: editedImg,
            author: editedAuthor,
            caption: editedCaption, //caption or content? *********************
        };
        await PostService.update(id, editedPost);
        getPostsAgain();
    }
};

const handleDelete = async () => {
  await PostService.remove(id);
  getPostsAgain();
};

async function fetchComments(id) {
  let res = await PostService.getAllComments(id);
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
          {!isEditing && <h1>{memeImage}</h1>}
          {isEditing && (
              <input
                  onChange={(e) => setImg(e.target.value)}
                  value={editedImg}
                  type="text"  // blob?***************************************************
                  name="memeImage"
                  placeholder="Upload"
              />
          )}
          <div>
                    <button onClick={handleEdit}>
                        {isEditing ? "Submit" : "Edit"}
                    </button>
                    <button onClick={handleDelete}> Delete </button>
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
                        onChange={(e) => setcaption(e.target.value)}
                        value={editedCaption} // caption or content? *************
                        type="text"
                        name="caption"
                        placeholder="Caption"
                    />
                )}
            </div>
            <div className="likes">
                <Likes />
            </div>
            <div className="dislike">
                <Dislike />
            </div>
            <div>
                <h3>Comments:</h3>
                {comments.map((comment) => {
                    return (
                        <Comment
                            author={comment.author}
                            caption={comment.caption} // caption or content? *************
                            key={comment._id}
                            commentId={comment._id}
                            id={id}
                            getCommentsAgain={(id) => fetchComments(id)}
                        />
                    );
                })}
            </div>
            <CommentForm
                id={id}
                getPostsAgain={() => getPostsAgain()}
                getCommentsAgain={(id) => fetchComments(id)}
            />
        </div>
    );

}

Post.propTypes = {
  id: string.isRequired,
  memeImage: string.isRequired,
  author: string.isRequired,
  caption: string.isRequired, // caption or content? ************
  postComments: array,
  getPostsAgain: func,
};

Post.defaultProps = {
  author: "Memeify Me",
};

export default Post;