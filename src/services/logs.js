import request from '../utils/commonhttp';
import api from '../utils/apiurl';

// 查询接口
export function query(params) {
  return request({
    url: api.findLoginlog,
    method: 'post',
    data: params,
  });
}
