import request from '../utils/commonhttp';
import api from '../utils/apiurl';

/* 查询接口 */
export function query(params) {
  return request({
    url: api.findLoginlog,
    method: 'post',
    data: params,
  });
}

/* 查询操作日志 */
export function querysyshandle(params) {
  return request({
    url: api.findHandleLog,
    method: 'post',
    data: params,
  });
}

/* 查询操作日志 */
export function querysyserror(params) {
  return request({
    url: api.findErrorLog,
    method: 'post',
    data: params,
  });
}
