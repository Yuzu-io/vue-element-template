<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { getCookie } from './utils/auth'

export default {
  watch: {
    $route (to, from) {
      if (to.meta.Authority) {
        if (getCookie('Admin-Token')) {
          this.$router.push(this.$route)
        } else {
          this.$router.replace('/login')
        }
      } else {
        this.$router.push(this.$route)
      }
    }
  }
}
</script>

<style lang="less">
@import url('./style/reset.min.css');

// #nprogress .bar {
//   background: red !important; //进度条自定义颜色
// }
</style>
