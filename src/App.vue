<template>
  <div id="app">
    <!-- <transition :name="transitionName"> -->
      <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      transitionName: ""
    }
  },
  // watch: {
  //   $route(to, from) {
  //     //将不想有过渡动画效果的部分路由写进判断条件中
  //     if (to.path !== '/') {
  //       //如果to索引大于from索引,判断为前进状态,反之则为后退状态
  //       if (to.meta.index < from.meta.index) {
  //         //设置动画名称
  //         this.transitionName = 'slide-left';
  //       } else if (to.meta.index > from.meta.index) {
  //         this.transitionName = 'slide-right';
  //       } else if (to.meta.index == 99) {
  //         this.transitionName = ""
  //       }
  //     } else {
  //       this.transitionName = ""
  //     }
  //   }
  // }
}
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #fff;
}

::-webkit-scrollbar {
  width: 0px;
}
</style>
