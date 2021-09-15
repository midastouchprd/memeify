import * as tokenService from '../utils/tokenservice';
import tellMemifyto from './tellMemifyto';

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
