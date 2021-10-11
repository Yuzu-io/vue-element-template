const Mock = require('mockjs')

// 根据url获取query参数
const getQuery = (url, name) => {
  const index = url.indexOf('?')
  if (index !== -1) {
    const queryStr = url.substr(index + 1).split('&')
    for (const iterator of queryStr) {
      const itemArr = iterator.split('=')
      if (itemArr[0] === name) {
        return itemArr[1]
      }
    }
  }
  return null
}

// token
const token = Mock.mock('@guid()')
// user
const { user } = Mock.mock({
  'user|10': [
    {
      username: '@string(3,9)',
      password: '@string(5)'
    }
  ]
})

// 默认账户
const admin = {
  username: 'admin',
  password: '123456'
}
user.unshift(admin)

Mock.mock(/\/api\/v2\/login/, 'post', (options) => {
  var choose = false
  const admin = getQuery(options.url, 'admin')
  const pass = getQuery(options.url, 'pass')
  user.find(item => {
    if (item.username === admin && item.password === pass) {
      choose = true
    }
  })
  if (choose) {
    return {
      status: 200,
      message: '请求成功',
      user: user,
      token: token
    }
  } else {
    return {
      status: 400,
      message: '请求失败'
    }
  }
})
