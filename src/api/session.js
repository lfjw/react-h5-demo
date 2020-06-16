import { get,post } from './index';
export function login(body) {
  return post('/login', body)
}
export function reg(body) {
  return post('/reg', body)
}
// 本地cookie发给服务器，服务器判断合法，返回用户信息
// cookie不合法，返回未登录提示
export function validate(body){
  return get('/validate', body)
}
