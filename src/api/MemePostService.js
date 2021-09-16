import * as tokenService from "../utils/tokenservice";
import tellMemifyto from "./tellMemifyto";

const createMemePost = (data) => {
  //   console.log(data);
  //   return tellMemifyto
  //     .post('/memeposts', data, options)
  //     .then((res) => {
  //       setTimeout(() => {
  //         setInfo(res.data.memepost);
  //         setProgressPercent(0);
  //       }, 1000);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //       setError({
  //         found: true,
  //         message: err.response.data.errors,
  //       });
  //       setTimeout(() => {
  //         setError({
  //           found: false,
  //           message: '',
  //         });
  //         setProgressPercent(0);
  //       }, 3000);
  //     });
};

export { createMemePost };
//check with J. Flores work to see what he names comment folder/files

import tellMemeifyto from "./tellMemeifyto";

const getAll = () => {
  return tellMemeifyto.get("/memeposts");
};

const get = (id) => {
  return tellMemeifyto.get(`/memeposts/${id}`);
};

const getAllComments = (id) => {
  return tellMemeifyto.get(`/memeposts/${id}/comments`);
};

const create = (data) => {
  return tellMemeifyto.post("/memeposts", data);
};

const createComment = (id, data) => {
  return tellMemeifyto.post(`/memeposts/${id}/comment`, data);
};

const update = (id, data) => {
  return tellMemeifyto.put(`/memeposts/${id}`, data);
};

const updateComment = (id, commentId, data) => {
  return tellMemeifyto.put(`/memeposts/${id}/comment/${commentId}`, data);
};

const remove = (id) => {
  return tellMemeifyto.delete(`/memeposts/${id}`);
};

const removeComment = (id, commentId) => {
  return tellMemeifyto.delete(`/memeposts/${id}/comment/${commentId}`);
};

// You can only export default when there's one thing to export
export {
  getAll,
  get,
  getAllComments,
  create,
  createComment,
  update,
  updateComment,
  remove,
  removeComment,
};
