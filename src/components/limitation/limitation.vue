<template>
  <div class="limitation" v-show="basiccShowli">
    <div class="back" @click.stop.prevent="backtoApp">←</div>
    <div class="workwindow">
      <div class="lim">lim</div>
      <div class="xlim">x→<input type="text" class="limx"></div>
      <div class="fcOrsum"><input type="text" placeholder="函数体" class="inputfunc"></div>
      <div class="equals" @click="getAnswer">=</div>
      <div class="results"><input type="text" v-model="finalResults"></div>
      <div class="question" @click="opening">过程?</div>
    </div>
  </div>
</template>

<script>
import {limit} from '../../common/js/limit'
import * as math from 'mathjs'
var trulyTempresults = []
export default {
  name: 'limitation',
  props: {
    headerShow4: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      basiccShowli: this.headerShow4,
      finalResults: '',
      tempResults: []
    }
  },
  beforeUpdate () {
    this.basiccShowli = this.headerShow4
    console.log('子组件被创建时的状态' + this.basiccShowli)
  },
  methods: {
    backtoApp () {
      this.$router.go(-1)
      this.basiccShowli = !this.basiccShowli
      let headerShowitli = !this.basiccShowli
      console.log('事件是执行了的')
      this.$emit('headerShowitli', headerShowitli)
    },
    opening () {
      window.alert('和积分一样：-）')
    },
    getAnswer () {
      console.log('hehe')
      // (1-cos(x))/(x*x)
      // (e^x-1)/x
      trulyTempresults = limit()
      console.log(trulyTempresults)
      var tempxn = math.eval(trulyTempresults[0])
      var tempfunc = trulyTempresults[1]
      var re = /x/g
      var tempxnL = math.eval(tempxn - 0.00000001)
      var tempxnR = math.eval(tempxn + 0.00000001)
      var tempLexp = tempfunc.replace(re, tempxnL)
      var tempmexp = tempfunc.replace(re, tempxn)
      var tempRexp = tempfunc.replace(re, tempxnR)
      console.log('左结果是？？' + math.eval(tempLexp))
      console.log(tempxnL - tempxnR)
      console.log('右结果是？？' + math.eval(tempRexp))
      var diff = math.abs(math.eval(tempLexp) - math.eval(tempRexp))
      console.log(diff)
      if (diff < 0.000001) {
        if (math.abs(math.eval(tempLexp)) < 0.0000001) {
          this.finalResults = 0
        } else {
          if (math.eval(tempmexp).toString() === 'NaN') {
            this.finalResults = math.eval(tempLexp)
            var re2 = /\.000000\d+/g
            var re3 = /\.999999{0,}\d+/g
            this.finalResults = this.finalResults.toString().replace(re2, '')
            this.finalResults = this.finalResults.toString().toString().replace(re3, '+1')
            this.finalResults = math.eval(this.finalResults)
          } else {
            this.finalResults = math.eval(tempmexp)
          }
        }
      } else {
        alert('不存在的啦')
        this.finalResults = ''
      }
    }
  }
}
</script>

<style scoped>
.limitation .back{
  font-size: 40px;
}
.limitation .workwindow{
  position: relative;
  width: 100%;
  height: 200px;
}
  .limitation .workwindow .lim{
     font-size: 50px
  }
.limitation .workwindow .xlim{
  margin-top: -20px;
  font-size: 20px
}
.limitation .workwindow .xlim>input{
      width: 45px;
      height: 20px;
  background: #CCE6EA;
  border-style: none;
  border: 1px solid #00A0F4;
  border-radius: 4px;
}
.limitation .workwindow .fcOrsum{
  position: absolute;
  width: 200px;
  height: 200px;
  top:10px;
  left: 100px;
}
.limitation .workwindow .fcOrsum>input{
  width: 150px;
  height: 50px;
  font-size: 30px;
  background: #CCE6EA;
  border: 1px solid #00A0F4;
  border-radius: 8px;
}
.limitation .workwindow .equals{
  width: 120px;
  height: 60px;
  margin-top: 20px;
  background: rgba(0,130,151,0.5);
  font-size:40px;
  border-radius: 20px;
  text-align: center
}
.limitation .workwindow .results{
  position:absolute;
  top:97px;
  left: 120px;
  width: 200px;
  height: 60px;
  background: rgba(0,130,151,0.5);
  font-size:40px;
  border-radius: 20px;
  text-align: center;
}
.limitation .workwindow .results>input{
  width: 190px;
  height: 30px;
  border-radius: 12px;
  font-size: 40px;
  background: rgba(0,130,151,0.1);
  border: 1px solid #00A0F4;
  border-radius: 8px;
}
.limitation .workwindow .question{
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
