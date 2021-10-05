<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  watch: {
    $route (to, from) {
      if (to.meta.Authority) {
        if (this.$store.state.user.admin !== '') {
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
