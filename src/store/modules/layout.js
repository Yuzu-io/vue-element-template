
const state = {
  isShrink: false
}

const mutations = {
  shrink (state, isCollapse) {
    state.isShrink = isCollapse
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}
