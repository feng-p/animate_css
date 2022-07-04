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
      path: "/slotCard",
      name: "SlotCard",
      component: () => import("@/views/slotCard/index"),
      meta: {
        index: 2,
      },
    },
  ],
});
