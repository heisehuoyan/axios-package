import Vue from "vue";
import VueRouter from "vue-router";
import hooks from "./hook";
import Home from "../view/home.vue";
import Lesson from "../view/lesson.vue";
Vue.use(VueRouter);
// 自动生成路由 不建议路由自动配置 可配置性比较低 （批注，钩子）
// webapp  活动页
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/lesson",
    name: "lesson",
    component: Lesson,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

Object.values(hooks).forEach((hooks) => {
  router.beforeEach(hooks);
});
export default router;
