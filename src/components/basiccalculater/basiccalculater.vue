<template>
  <div class="basiccalculater" v-show="basiccShow" @click="getAnswer">
    <div class="back" @click.stop.prevent="makeHeadershow">←</div>
    <div class="workwindow">
      <input type="text" v-model="dd3">
    </div>
    <div class="operator" ref="fhFather">

        <button class="btn1" @click.stop.prevent="clearAll">c</button>
        <button class="btn2">del</button>
        <button class="btn3">+</button>
        <button class="btn4">-</button>

        <button class="btn5">1</button>
        <button class="btn6">2</button>
        <button class="btn7">3</button>
        <button class="btn8">*</button>

        <button class="btn9">4</button>
        <button class="btn10">5</button>
        <button class="btn11">6</button>
        <button class="btn12}">/</button>

        <button class="btn13">7</button>
        <button class="btn14">8</button>
        <button class="btn15">9</button>
        <button class="btn16" @click.stop.prevent="getTheresult">=</button>
        <button class="btn17">.</button>
        <button class="btn18">0</button>
        <button class="btn19">(</button>
        <button class="btn20">)</button>

    </div>
  </div>
</template>

<script>
import {accountIt} from '../../common/js/bcalculate'
// import {calculatebasic} from '../../common/js/calculatebasic'
import * as math from 'mathjs'
export default {
  name: 'basiccalculater',
  props: {
    headerShow2: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      basiccShow: this.headerShow2,
      ss: '',
      dd: '我没变1',
      dd2: [],
      dd3: ''
    }
  },
  beforeUpdate () {
    this.basiccShow = this.headerShow2
    console.log('子组件被创建时的状态' + this.basiccShow)
  },
  methods: {
    makeHeadershow () {
      this.$router.go(-1)
      this.basiccShow = !this.basiccShow
      let headerShowit = !this.basiccShow
      console.log('事件是执行了的')
      this.$emit('headerShowit', headerShowit)
    },
    getAnswer () {
      var result = accountIt(this.ss)(event)
      console.log(result)
      this.dd2.push(result)
      this.dd3 = this.dd2.join('')
    },
    getTheresult () {
      console.log(this.dd3)
      var lastNumber = math.eval(this.dd3)
      this.dd3 = lastNumber
    },
    clearAll () {
      this.dd3 = ''
      this.dd2 = []
    }

  },
  mounted: function () {
  },
  created () {
    console.log('哈哈' + this.headerShow2)
  }
}
</script>

<style scoped>
.basiccalculater .back{
  font-size: 40px;
}
.basiccalculater .workwindow{
  width: 98%;
  height: 60px;
  border: 2px solid darkgreen;
  }
.basiccalculater .workwindow>input{
  width: 100%;
  height: 100%;
  font-size: 30px;
  text-align: right
}
.basiccalculater .operator{
  margin-top: 80px;
  flex-wrap: wrap;
}
.basiccalculater .operator>button{
  width: 85px;
  height: 90px;
  flex-wrap: wrap;
  font-size:40px;
  border-radius: 10px;
  background-color: darkcyan;
}
</style>
