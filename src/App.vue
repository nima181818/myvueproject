<template>
  <div class="app1">
    <iheader :headerShow1="headerShow"></iheader>
    <div class="tab">
    <div class="tab-item" @click="hideother" v-show="headerShowB">
      <router-link to="/components/basiccalculater/basiccalculater" class="stl" active-class="aactive">+-*÷</router-link>
    </div>
      <div class="tab-item" @click="hideotherfc" v-show="headerShowfc">
        <router-link to="/components/calculus/calculus" class="stl" active-class="aactive">
          <img src="./components/calculus/cal.jpg" class="theimg"></router-link>
      </div>
      <div class="tab-item" @click="hideotherli" v-show="headerShowli">
        <router-link to="/components/limitation/limitation" class="stl" active-class="aactive">
          <img src="./components/limitation/limitation.jpg" class="theimg"></router-link>
      </div>
      <div class="tab-item" @click="hideotherCA" v-show="headerShowCA">
        <router-link to="/components/funcCanvas/funcCanvas" class="stl" active-class="aactive">
          <img src="./components/funcCanvas/canvas.jpg" class="theimg"></router-link>
      </div>
      <div class="tab-item" @click="hideotherNE" v-show="headerShowNE">
        <router-link to="/components/newsofmath/newsofmath" class="stl" active-class="aactive">
          <img src="./components/newsofmath/mathlegends.jpg" class="theimg"></router-link>
      </div>
      <div class="tab-item" @click="hideotherRE" v-show="headerShowRE">
        <router-link to="/components/reglogin/reglogin" class="stl" active-class="aactive">
          <img src="./components/reglogin/relogin.jpg" class="theimg"></router-link>
      </div>
    </div>
    <keep-alive><router-view
      @headerShowit="okShowit"
      :headerShow2="temp"
      :headerShow3="tempfc"
      :headerShow4="templi"
      :headerShow5="tempCA"
      :headerShow6="tempNE"
      :headerShow7="tempRE"
      @headerShowitli="okShowitli"
      @headerShowitNE="okShowitNE"
      @headerShowitRE="okShowitRE"
      @headerShowitCA="okShowitCA"
      @headerShowitfc="okShowitfc"></router-view></keep-alive>
  </div>
</template>

<script>
import iheader from './components/header/header.vue'
import basiccalculater from './components/basiccalculater/basiccalculater.vue'
import calculus from './components/calculus/calculus.vue'
import limitation from './components/limitation/limitation'
import funcCanvas from './components/funcCanvas/funcCanvas'
import newsofmath from './components/newsofmath/newsofmath'
import reglogin from './components/reglogin/reglogin'
export default {
  name: 'App',
  components: {
    iheader,
    basiccalculater,
    calculus,
    limitation,
    funcCanvas,
    newsofmath,
    reglogin
  },
  data () {
    return {
      headerShow: true,
      headerShowB: true,
      headerShowfc: true,
      headerShowli: true,
      headerShowCA: true,
      headerShowNE: true,
      headerShowRE: true,
      tempfc: true,
      temp: true,
      templi: true,
      tempCA: true,
      tempNE: true,
      tempRE: true
    }
  },
  methods: {
    hideother () {
      this.headerShow = false
      this.headerShowB = false
      this.headerShowfc = false
      this.headerShowli = false
      this.headerShowCA = false
      this.headerShowNE = false
      this.headerShowRE = false
      this.temp = !this.headerShowB
      console.log(this.headerShow)
    },
    hideotherfc () {
      this.headerShow = false
      this.headerShowB = false
      this.headerShowfc = false
      this.headerShowli = false
      this.headerShowCA = false
      this.headerShowNE = false
      this.headerShowRE = false
      this.tempfc = !this.headerShowfc
      console.log('点击传送微积分的传送门后中间件' + this.tempfc)
      console.log('目前父组件的状态' + this.headerShow)
    },
    hideotherli () {
      this.headerShow = false
      this.headerShowB = false
      this.headerShowfc = false
      this.headerShowli = false
      this.headerShowCA = false
      this.headerShowNE = false
      this.headerShowRE = false
      this.templi = !this.headerShowli
      console.log('点击传送极限的传送门后中间件' + this.templi)
      console.log('目前父组件的状态' + this.headerShow)
    },
    hideotherCA () {
      this.headerShow = false
      this.headerShowB = false
      this.headerShowfc = false
      this.headerShowli = false
      this.headerShowCA = false
      this.headerShowNE = false
      this.headerShowRE = false
      this.tempCA = !this.headerShowCA
      console.log('点击传送极限的传送门后中间件' + this.tempCA)
      console.log('目前父组件的状态' + this.headerShow)
    },
    hideotherNE () {
      this.headerShow = false
      this.headerShowB = false
      this.headerShowfc = false
      this.headerShowli = false
      this.headerShowCA = false
      this.headerShowNE = false
      this.headerShowRE = false
      this.tempNE = !this.headerShowNE
      console.log('点击传送极限的传送门后中间件' + this.tempNE)
      console.log('目前父组件的状态' + this.headerShow)
    },
    hideotherRE () {
      this.headerShow = false
      this.headerShowB = false
      this.headerShowfc = false
      this.headerShowli = false
      this.headerShowCA = false
      this.headerShowNE = false
      this.headerShowRE = false
      this.tempRE = !this.headerShowRE
      console.log('点击传送极限的传送门后中间件' + this.tempRE)
      console.log('目前父组件的状态' + this.headerShow)
    },
    okShowitfc (headerShowitfc) {
      this.headerShow = headerShowitfc
      this.headerShowB = headerShowitfc
      this.headerShowfc = headerShowitfc
      this.headerShowli = headerShowitfc
      this.headerShowCA = headerShowitfc
      this.headerShowNE = headerShowitfc
      this.headerShowRE = headerShowitfc
      console.log('父组件接收到积分组件的中间件' + this.headerShow)
    },
    okShowit (headerShowit) {
      this.headerShow = headerShowit
      this.headerShowB = headerShowit
      this.headerShowfc = headerShowit
      this.headerShowli = headerShowit
      this.headerShowCA = headerShowit
      this.headerShowNE = headerShowit
      this.headerShowRE = headerShowit
      console.log('父组件接收到计算组件的中间件' + this.headerShow)
    },
    okShowitli (headerShowitli) {
      this.headerShow = headerShowitli
      this.headerShowB = headerShowitli
      this.headerShowfc = headerShowitli
      this.headerShowli = headerShowitli
      this.headerShowCA = headerShowitli
      this.headerShowNE = headerShowitli
      this.headerShowRE = headerShowitli
      console.log('父组件接收到极限组件的中间件' + this.headerShow)
    },
    okShowitCA (headerShowitCA) {
      this.headerShow = headerShowitCA
      this.headerShowB = headerShowitCA
      this.headerShowfc = headerShowitCA
      this.headerShowli = headerShowitCA
      this.headerShowCA = headerShowitCA
      this.headerShowNE = headerShowitCA
      this.headerShowRE = headerShowitCA
      console.log('父组件接收到极限组件的中间件' + this.headerShow)
    },
    okShowitNE (headerShowitNE) {
      this.headerShow = headerShowitNE
      this.headerShowB = headerShowitNE
      this.headerShowfc = headerShowitNE
      this.headerShowli = headerShowitNE
      this.headerShowCA = headerShowitNE
      this.headerShowNE = headerShowitNE
      this.headerShowRE = headerShowitNE
      console.log('父组件接收到极限组件的中间件' + this.headerShow)
    },
    okShowitRE (headerShowitRE) {
      this.headerShow = headerShowitRE
      this.headerShowB = headerShowitRE
      this.headerShowfc = headerShowitRE
      this.headerShowli = headerShowitRE
      this.headerShowCA = headerShowitRE
      this.headerShowNE = headerShowitRE
      this.headerShowRE = headerShowitRE
      console.log('父组件接收到极限组件的中间件' + this.headerShow)
    }
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0,130,151,0.2);
  }
  .app1{
    position: relative
  }
  .app1 .tab .tab-item{
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px 10px;
    font-size: 20px;
    border-radius: 15%;
    background: dodgerblue;
    color: black;
    text-align: center;
    line-height: 80px;
    float: left;
  }
  .app1 .tab .tab-item .aactive{
    color:white;
  }
  .tabclose-enter-active,.tabclose-leave-active{
    transition:all 1s ease;
    opacity:1;
  }
  .tabclose-enter,.tabclose-leave-to{
    opacity:0;
  }
  .theimg{

    width: 100%;
    height: 100%;
    border-radius: 15%
  }
</style>
