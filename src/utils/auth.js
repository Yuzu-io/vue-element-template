import Cookie from 'js-cookie'
export function setCookie (Tokenkey, token) {
  return Cookie.set(Tokenkey, token)
}

export function getCookie (Tokenkey) {
  return Cookie.get(Tokenkey)
}

export function delCookie (Tokenkey) {
  return Cookie.remove(Tokenkey)
}
