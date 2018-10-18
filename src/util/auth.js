/**
 * 权限验证
 */
import name, {age, foo} from './test'
import Cookies from 'js-cookie'
console.log(name, '6666')
console.log(age, '7777')
console.log(foo, '8888')


const TOKEN_KEY = 'bGVlaW5nX3Rva2Vu' // 'leeing_token'
const TokenKey = new Buffer(TOKEN_KEY, 'base64').toString() // base64 解码

function getToken () {
  return Cookies.get(TokenKey)
}

function setToken (token) {
  return Cookies.set(TokenKey, token, {expires: 1, path: '/'})
}

function removeToekn () {
  return Cookies.remove(TokenKey)
}

export {
  getToken,
  setToken,
  removeToekn
}
