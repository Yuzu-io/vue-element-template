<template>
  <div class="topbar">
    <div class="top-menu">
      <div class="left">
        <i
          @click="shrink"
          :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        ></i>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <span v-if="breadRoute[0].meta.title != '首页'">
            <el-breadcrumb-item
              v-for="item in breadRoute"
              :key="item.name"
              :to="{ path: '' }"
              >{{ item.meta.title }}</el-breadcrumb-item
            >
          </span>
        </el-breadcrumb>
      </div>
      <div class="right">
        <!-- 搜索框 -->
        <!-- <svg-icon icon-class="search" /> -->
        <!-- 全屏缩放 -->
        <svg-icon
          @click.native="fullscreen"
          :icon-class="isFullScreen ? 'exit-fullscreen' : 'fullscreen'"
        />
        <!-- 内容文字大小 -->
        <!-- <svg-icon icon-class="size" /> -->
        <!-- 语言 -->
        <!-- <svg-icon icon-class="language" /> -->
        <!--  -->
        <drop-down class="drop-down">
          <img
            :src="avatar"
            alt=""
          />
        </drop-down>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/svgIcon/index.vue'
import DropDown from '../Dropdown/DropDown.vue'

export default {
  components: {
    SvgIcon,
    DropDown
  },
  data () {
    return {
      isCollapse: false,
      isFullScreen: false,
      avatar: require('../../../../public/img/f778738c-e4f8-4870-b634-56703b4acafe.gif')
    }
  },
  methods: {
    shrink () {
      this.isCollapse = !this.isCollapse
      this.$store.commit('shrink', this.isCollapse)
    },
    fullscreen () {
      const docElm = document.documentElement
      if (!document.fullscreenElement) {
        docElm.requestFullscreen()
        this.isFullScreen = true
        // console.log(!document.fullscreenElement)
      } else {
        document.exitFullscreen()
        this.isFullScreen = false
        // console.log(!document.fullscreenElement)
      }
    }
  },
  computed: {
    breadRoute () {
      return this.$route.matched[0].meta.title === undefined
        ? this.$route.matched.slice(1)
        : this.$route.matched
    }
  }
}
</script>

<style lang="less" scoped>
.top-menu {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    font-size: 24px;
    i {
      padding: 0 20px 0 0;
    }
  }
  // 面包屑
  .el-breadcrumb {
    /deep/.el-breadcrumb__inner {
      font-weight: normal;
    }
    .el-breadcrumb__item:last-child {
      /deep/ .el-breadcrumb__inner {
        color: #97a8be;
      }
    }
  }
  //right
  .right {
    svg {
      padding: 0 8px;
      font-size: 18px;
    }
    .drop-down {
      img {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
    }
  }
}
</style>
