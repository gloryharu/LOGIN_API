import axios from 'axios';
export const API = async({endPoint, method, isLogin = false, param, token}) => {
  return axios({
    method: method,
    url: 'http://i-web.com.vn/api/v1/auth/' + endPoint,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: isLogin ? null : 'Bearer ' + token,
    },
    data: param,
  })
    .then(res => {
      return res.data;
    })
    .catch(error => console.log(error));
};
