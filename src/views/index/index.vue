<template>
  <div class="contain">
    <Slider></Slider>
    <main class="nav">
      <!-- <transition :name="transitionName"> -->
      <div class="box nav-el" :id="getBoxId(item.index)" :data-id="getDataId(item.index)" v-for="item in list"
        v-bind:key="item.index" @click.prevent="jumpPage(item)">{{ item.name }}</div>
      <!-- </transition> -->
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Slider from "@/components/slider.vue"
import Footer from "@/components/footer.vue"
import $ from 'jquery'
export default {
  name: 'Index',
  components: {
    Slider, Footer
  },
  data() {
    return {
      list: [
        { name: "自助挂号", path: "/zzgh", index: 0 },
        { name: "签约建档", path: "/qyjd", index: 1 },
        { name: "门诊缴费", path: "/mzjf", index: 2 },
        { name: "主动服务", path: "/zdfw", index: 3 }
      ],
      transitionName: "",
    }
  },
  watch: {
    $route(to, from) {
      //将不想有过渡动画效果的部分路由写进判断条件中
      if (to.path !== '/') {
        //如果to索引大于from索引,判断为前进状态,反之则为后退状态
        // if (to.meta.index < from.meta.index) {
        //   //设置动画名称
        //   this.transitionName = 'slide-left';
        // } else if (to.meta.index > from.meta.index) {
        //   this.transitionName = 'slide-right';
        // } else if (to.meta.index == 99) {
        //   this.transitionName = ""
        // }
      } else {
        // this.transitionName = ""
      }
    }
  },
  create() { },
  mounted() { },
  methods: {
    jumpPage(item) {
      if ($('.nav-el').eq(item.index).hasClass("inactive")) {
        event.preventDefault();
      } else {
        /* Remove old previous classes */
        $('.nav-el').removeClass('inactive_reverse active_reverse');
        $('.nav').removeClass('fx-box_rotate fx-box_rotate_reverse');
        /* Add classes on defined elements */
        $('.nav-el').eq(item.index).siblings().addClass('inactive');
        $('.nav-el').eq(item.index).addClass('active');
        $('.nav').addClass('fx-box_rotate');
        /* Activate related overlay */
        var o_target = this.getDataId(item.index);
        console.log(o_target)
        $('#' + o_target).addClass('active');
      }
      setTimeout(() => {
        this.$router.push({ path: item.path })
      }, 800)
    },
    getBoxId(index) {
      switch (index) {
        case 0:
          return "el-topleft";
        case 1:
          return "el-topright";
        case 2:
          return "el-btmleft";
        case 3:
          return "el-btmright";
      }
    },
    getDataId(index) {
      switch (index) {
        case 0:
          return "ov-topleft";
        case 1:
          return "ov-topright";
        case 2:
          return "ov-btmleft";
        case 3:
          return "ov-btmright";
      }
    }
  },
}
</script>

<style  scoped>
.contain {
  width: 100%;
  height: 100%;
  background: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  padding: 150px 110px;
  flex: 1;
  border: solid 1px #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.box {
  width: 200px;
  height: 200px;
  background: pink;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  line-height: 200px;
  margin: 50px
}

@import '@/assets/css/animate.css';
</style>
