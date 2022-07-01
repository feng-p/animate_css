<template>
  <div class="con">
    <span @click="goBack">×</span>
    <h1>主动服务</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  create() { },
  mounted() { },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
}
</script>

<style  scoped>
.con {
  width: 100%;
  height: 100%;
  position: relative;
  background: pink;
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
  padding-top: 200px;
}
</style>
