import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    //配置路由，这里是个数组
    {
      path: "/", //链接路径
      name: "Index", //路由名称
      component: () => import("@/views/index/index"),
      meta: {
        index: 1,
      },
    },
    {
      path: "/mzjf",
      name: "Mzjf",
      component: () => import("@/views/mzjf/index"),
      meta: {
        index: 2,
      },
    },
    {
      path: "/zdfw",
      name: "Zdfw",
      component: () => import("@/views/zdfw/index"),
      meta: {
        index: 2,
      },
    },
    {
      path: "/zzgh",
      name: "Zzgh",
      component: () => import("@/views/zzgh/index"),
      meta: {
        index: 2,
      },
    },
    {
      path: "/qyjd",
      name: "Qyjd",
      component: () => import("@/views/qyjd/index"),
      meta: {
        index: 2,
      },
    },
  ],
});
