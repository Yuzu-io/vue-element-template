<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <slot></slot>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>个人中心</el-dropdown-item>
      <el-dropdown-item divided @click="signOut">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {

  methods: {
    signOut () {
      // 发射一个方法
      this.$emit('signOut')
    }
  }
}
</script>

<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
}
</style>
