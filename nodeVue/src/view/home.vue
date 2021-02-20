<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import * as Types from "../store/action-types";
import { createNamespacedHelpers } from "vuex";
// 这里拿到的都是home 模块下的
let { mapState, mapMutations, mapActions } = createNamespacedHelpers("home");
export default {
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(["category", "slides"]) // 获取vuex中的状态绑定到当前的实例
  },
  methods: {
    ...mapMutations([Types.SET_CATEGORY]),
    ...mapActions([Types.SET_SLIDES])
  },
  async mounted() {
    await this[Types.SET_SLIDES]();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
