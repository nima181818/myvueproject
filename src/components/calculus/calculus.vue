<template>
  <div class="calculus" v-show="basiccShowfc">
    <div class="back" @click.stop.prevent="makeHeadershow">←</div>
    <div class="icon-s">∫</div>
    <div class="limit">
    <div class="top-limit"><input id="top1" type="text" placeholder="上限"></div>
      <div class="functions"><input id="middle1" type="text" placeholder="函数体"></div>
      <div class="bottom-limit"><input id="bottom1" type="text" placeholder="下限"></div>
      <div class="dx">dx</div>
    </div>
    <div class="answer" @click="getResults">=</div>
    <div class="results"><input type="text" v-model="finalResults"></div>
    <div class="question" @click="opening">过程?</div>
    <falert :show.sync="show"
           :title="title"
           :content="content"></falert>
  </div>
</template>

<script>
import falert from '../alert/falert.vue'
import {calculusIt} from '../../common/js/calculus'
import * as math from 'mathjs'
var theResults = []
export default {
  name: 'calculus',
  props: {
    headerShow3: {
      type: Boolean,
      default: false
    }
  },
  components: {
    falert
  },
  data () {
    return {
      basiccShowfc: this.headerShow3,
      show: false,
      title: 'sorry~~~~',
      content: '开发中敬请期待',
      t: 0,
      b: 0,
      m: '',
      finalResults: 0
    }
  },
  beforeUpdate () {
    this.basiccShowfc = this.headerShow3
    console.log('子组件被创建时的状态' + this.basiccShowfc)
  },
  mounted () {
    console.log('fuckyou')
  },
  methods: {
    makeHeadershow () {
      this.$router.go(-1)
      this.basiccShowfc = !this.basiccShowfc
      let headerShowitfc = !this.basiccShowfc
      console.log('点击子组件返回时子组件状态' + this.basiccShowfc)
      console.log('子传父的中间件' + headerShowitfc)
      this.$emit('headerShowitfc', headerShowitfc)
    },
    opening () {
      this.show = !this.show
    },
    getResults () {
      theResults = calculusIt()
      // console.log('结果' + theResults)
      this.t = parseFloat(theResults[0])
      this.b = parseFloat(theResults[2])
      this.m = theResults[1]
      console.log(this.m)
      var n = 1000000
      var re = /x/g
      var reln = /ln/g
      var chln = 'log'
      var ddd = 0
      var t1 = math.eval(this.t)
      var b1 = math.eval(this.b)
      var r1 = math.eval(this.t - this.b)
      console.log(typeof (t1) + t1)
      for (var i = 0; i <= n; i++) {
        var q = math.eval(i / n)
        var temp = this.m.replace(re, q * r1 + b1)
        temp = temp.replace(reln, chln)
        temp = math.compile(temp)
        ddd += temp.eval()
      }
      var re2 = /\.00000\d+/g
      var re3 = /\.99999{0,}\d+/g
      this.finalResults = math.eval(r1 * ddd / n)
      this.finalResults = this.finalResults.toString().replace(re2, '')
      this.finalResults = this.finalResults.toString().toString().replace(re3, '+1')
      this.finalResults = math.eval(this.finalResults)
    }
  }
}
</script>

<style scoped>
  .calculus .back{
    font-size: 40px;
  }
  .calculus .icon-s{
    width: 40px;
    height: 120px;
    margin-left: 10px;
    font-size: 80px;
    text-align: center;
    float: left
  }
  .calculus .limit{
    position: relative;
    width: 80%;
    height: 120px;
    margin-left: 50px;
  }
  .calculus .limit .top-limit>input{
     width: 50px;
    height: 30px;
    border-radius: 12px;
    font-size: 20px;
    background: #CCE6EA;
    border-style: none
  }
  .calculus .limit .functions>input{
    width: 200px;
    height: 30px;
    margin-top: 10px;
    border-radius: 12px;
    font-size: 20px;
    background: #CCE6EA;
    border-style: none

  }
  .calculus .limit .bottom-limit>input{
    width: 50px;
    height: 30px;
    margin-top: 10px;
    border-radius: 12px;
    font-size: 20px;
    background: #CCE6EA;
    border: 1px solid #00A0F4;
    border-radius: 8px;
  }
  .calculus .limit .dx{
    position: absolute;
    width:40px;
    height:120px;
    font-size:40px;
    top:35px;
    right:10px;
  }
  .calculus .answer{
    width: 120px;
    height: 60px;
    background: rgba(0,130,151,0.5);
    font-size:40px;
    border-radius: 20px;
    text-align: center
  }
  .calculus .results{
    position:absolute;
    top:170px;
    left: 120px;
    width: 200px;
    height: 60px;
    background: rgba(0,130,151,0.5);
    font-size:40px;
    border-radius: 20px;
    text-align: center;
  }
  .calculus .results>input{
    width: 200px;
    height: 30px;
    border-radius: 12px;
    font-size: 40px;
    background: rgba(0,130,151,0.1);
    border: 1px solid #00A0F4;
    border-radius: 8px;
  }
  .calculus .question{
    width: 80px;
    height: 50px;
    font-size: 20px;
    background: rgba(0,130,151,0.5);
    border-radius: 25px;
    margin-top: 20px;
    text-align: center;
    line-height: 50px;
  }
</style>
