<template>
  <div id="app">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/lesson">我的课程</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
/* 这里我们可以去覆盖vant的样式 */
#app {
  .van-dropdown-menu__bar,
  .van-nav-bar {
    background-color: #2a2a2a;
  }
  .van-dropdown-menu__title,
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>
