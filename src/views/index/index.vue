<template>
  <div class="container">
    <SlotCard v-if="slotcardShow" @goIndex="goIndex"></SlotCard>
    <div class="contain" v-else>
      <Slider></Slider>
      <main class="nav">
        <div class="nav-el" :id="getNavId(item.index)" v-for="item in list" v-bind:key="item.index"
          @click.prevent="jumpPage(item)">{{ item.name }}</div>
      </main>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/slider.vue"
import Footer from "@/components/footer.vue"
import SlotCard from "../slotCard/index.vue"

import $ from 'jquery'
export default {
  name: 'Index',
  components: {
    Slider, Footer, SlotCard
  },
  data() {
    return {
      list: [
        { name: "自助挂号", index: 0 },
        { name: "签约建档", index: 1 },
        { name: "门诊缴费", index: 2 },
        { name: "主动服务", index: 3 }
      ],
      slotcardShow: false,
      selectIndex: null,
    }
  },
  create() { },
  mounted() { },
  methods: {

    jumpPage(item) {
      if ($('.nav-el').eq(item.index).hasClass("inactive")) {
        event.preventDefault();
      } else {
        $('.nav-el').eq(item.index).addClass('active').siblings().addClass('inactive');
        $(".footer_box").addClass("active")
        setTimeout(() => {
          this.slotcardShow = true;
          this.selectIndex = item.index;
        }, 1200)
      }
    },

    goIndex() {
      this.slotcardShow = false;
      this.$nextTick(() => {
        $(".footer_box").addClass("active_reverse")
        $('.nav-el').eq(this.selectIndex).addClass("active_reverse").siblings().addClass("inactive_reverse");
      });
      setTimeout(() => {
        $('.nav-el').removeClass("active inactive active_reverse inactive_reverse");
        $(".footer_box").removeClass("active active_reverse");
        this.selectIndex = null;
      }, 1200)
    },

    getNavId(index) {
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
  },
}
</script>

<style  scoped>
.container {
  width: 100%;
  height: 100%;
}

.contain {
  width: 100%;
  height: 100%;
  background: #a4d1ee;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  padding: 126px 40px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

.nav-el {
  width: 466px;
  height: 272px;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  line-height: 272px;
}

.nav-el:nth-child(1) {
  background: #3aba01;
}

.nav-el:nth-child(2) {
  background: #00eaeb;
}

.nav-el:nth-child(3) {
  background: #fecf07;
}

.nav-el:nth-child(4) {
  background: #14c1eb;
}

@import '@/assets/css/animate.css';
</style>
