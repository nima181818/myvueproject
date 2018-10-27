<template>
  <div class="header" v-show="headerShow1">
    <img src="./header.jpg">
    <div class="detail" @click="toggleIt()">
      <div class="little-icon"></div>
      <div class="little-icon"></div>
      <div class="little-icon"></div>
    </div>
    <transition name="designer"><div class="detail-wrapper" v-show="detailShow">
      <img src="./drwei.jpg">
      <div class="close-designer" @click="closeDesigner">x</div>
    </div></transition>
  </div>
</template>
<script>

export default {
  name: 'iheader',

  data () {
    return {
      detailShow: false,
      showComponents: false
    }
  },
  props: {
    headerShow1: {
      type: Boolean
    }
  },
  methods: {
    toggleIt () {
      this.detailShow = !this.detailShow
    },
    closeDesigner () {
      this.detailShow = false
    }
  }
}
</script>

<style scoped>
  .header{
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 0px;
    font-size: 0;
    text-align: center;
  }
  .header img{
    width: 100%;
    height: 200px;
    border-radius: 10px;
  }
  .header .detail{
    position: absolute;
    display: flex;
    width: 45px;
    height: 10px;
    top: 190px;
    left: 320px;

  }
  .header .detail .little-icon{
    width: 8px;
    height: 8px;
    margin-left: 2px;
    background: white;
    border-radius: 50%;
  }
  .header .detail-wrapper{
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0px;
    background: rgb(0,130,147);
  }
  .header .detail-wrapper img{
    width:100%;
    height:200px;
    padding:200px 0;

  }
  .header .detail-wrapper .close-designer{
    position: absolute;
    top: 90%;
    left:45%;
    width:40px;
    height: 40px;
    font-size: 40px;
  }
  .designer-enter-active,.designer-leave-active{
    transition:all 1s ease;
    opacity:1;
  }
  .designer-enter,.designer-leave-to{
    opacity:0;
    background: rgba(7,17,27,0);
  }
  .fadeofheader-enter-active,.fadeofheader-leave-active{
    transition:all 1s ease;
    opacity:1;
  }
  .fadeofheader-enter,.fadeofheader-leave-to{
    opacity:0;
  }
</style>
