/**
 * Created by leijie on 2017/8/14.
 *  http请求封装
 */
import axios from 'axios';
import qs from 'qs';


export default async function request(options) {
  return fetch(options).then((response) => {
    const { statusText, status } = response;
    let data = response.data;
    if (data instanceof Array) {
      data = {
        list: data,
      };
    }
    return {
      success: true,
      message: statusText,
      statusCode: status,
      ...data,
    };
  }).catch((error) => {
    const { response } = error;
    let msg;
    let statusCode;
    if (response && response instanceof Object) {
      const { data, statusText } = response;
      statusCode = response.status;
      msg = data.message || statusText;
    } else {
      statusCode = 600;
      msg = error.message || 'Network Error';
    }
    return { success: false, statusCode, message: msg };
  });
}

const fetch = (options) => {
  const { method, data, url } = options;
  const cloneData = qs.stringify(data, { skipNulls: true });

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData,
      });
    case 'post':
      return axios.post(url, cloneData, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    case 'put':
      return axios.put(url, cloneData);
    case 'patch':
      return axios.patch(url, cloneData);
    default:
      return axios(options);
  }
};
