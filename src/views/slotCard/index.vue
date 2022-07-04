<template>
  <div class="slotCard">
    <h1>刷卡页面</h1>
    <span @click="goBack()">返回</span>
  </div>
</template>

<script>
export default {
  name:"SlotCard",
  data() {
    return {}
  },
  create() { 
  },
  mounted() {
    console.log(111)
   },
  methods: {
    goBack(){
      this.$emit('goIndex')
    }
  },
}
</script>

<style  scoped>
.slotCard {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #a4d1ee;
  z-index: 10;
}
span{
  width: 200px;
  text-align: center;
  background: #fff;
  border-radius: 40px;
  font-size: 60px;
  line-height: 80px;
  color: black;
  position: absolute;
  bottom: 100px;
  left: 49.5%;
  margin-left: -100px;
}
</style>
