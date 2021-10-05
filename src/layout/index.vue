<template>
  <el-container>
  <el-aside width="none">
    <nav-menu></nav-menu>
  </el-aside>
  <el-container>
    <el-header>
      <div class="de-top-bar">
        <top-bar></top-bar>
      </div>
      <tags-view></tags-view>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import NavMenu from './components/navmenu/NavMenu.vue'
import TopBar from './components/topbar/TopBar.vue'
import TagsView from './components/TagsView/index.vue'
export default {
  components: {
    NavMenu,
    TopBar,
    TagsView
  }
}
</script>

<style
NavMenu scoped>
.de-top-bar{
  line-height: 60px;
  padding: 0 20px;
}

.el-header{
  height: 96px !important;
  padding: 0;
}
.el-header, .el-footer {
    /* background-color: #B3C0D1; */
    color: #333;
    /* text-align: center; */
    /* line-height: 60px; */
  }

  .el-aside {
    background-color: #304156;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
