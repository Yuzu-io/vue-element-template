
const state = {
  admin: '',
  pass: ''
}

const mutations = {
  login: (state, user) => {
    state.admin = user.admin
    state.pass = user.pass
  }
}

const actions = {
  login: (context, products) => {
    context.commit('login', products)
  }
}

export default {
  state,
  mutations,
  actions
}
