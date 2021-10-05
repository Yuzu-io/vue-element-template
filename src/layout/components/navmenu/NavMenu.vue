<template>
  <div class="navmenu">
    <el-menu
      :default-active="handRoute"
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#BFCBD9"
      active-text-color="#409EFF"
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose"
      :collapse="shrink"
    >
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="/daohang1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/daohang1/xuanxiang1">选项1</el-menu-item>
          <el-menu-item index="/daohang1/xuanxiang2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="/daohang2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>

      <el-menu-item index="/daohang4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
      this.$router.push(key)
    },
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    }
  },
  computed: {
    shrink () {
      return this.$store.getters.shrink
    },
    handRoute () {
      return this.$route.path.split('/index')[0]
    }
  }
}
</script>

<style lang="less" scoped>
.navmenu {
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}

.el-menu {
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
// 二级菜单被选中是的样式
.is-active > .el-submenu__title {
  i,
  span {
    color: #f4f4f5 !important;
  }
}
</style>
