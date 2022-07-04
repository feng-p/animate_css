<template>
  <div class="nav_footer">
    <div class="footer_box">
      <h1>Footer</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  create() { },
  mounted() { },
  methods: {},
}
</script>

<style  scoped>
.nav_footer {
  width: 100%;
  height: 352px;
  background: #dfedf6;
  font-size: 20px;
  text-align: center;
  line-height: 100px;
}

.footer_box {
  width: calc(100% - 100px);
  height: 292px;
  background: #fff;
  margin: 0 auto;
}
</style>
