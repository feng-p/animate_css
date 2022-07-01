<template>
  <div class="contain">
    <Slider></Slider>
    <div class="main_box">
      <span @click="goBack">×</span>
      <h1>门诊缴费</h1>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Slider from "@/components/slider.vue"
import Footer from "@/components/footer.vue"
import $ from 'jquery'
export default {
  components: {
    Slider, Footer
  },
  data() {
    return {}
  },
  create() { },
  mounted() { },
  methods: {
    goBack() {
      /* Add *_reverse classes */
      // $('.active', '.nav').removeClass('active').addClass('active_reverse');
      // $('.inactive', '.nav').addClass('inactive_reverse');
      // $('.nav').addClass('fx-box_rotate_reverse');
      $(".main_box").addClass('active_reverse');
      /* Remove .noscroll and .inactive when animation is finished */
      // $('.nav-el').removeClass('inactive');
      // this.$router.go(-1)
    }
  },
}
</script>

<style  scoped>
@import '@/assets/css/animate.css';

.contain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: pink;
}

.main_box {
  flex: 1;
}

span {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

h1 {
  text-align: center;
}
</style>

<style scoped>
</style>