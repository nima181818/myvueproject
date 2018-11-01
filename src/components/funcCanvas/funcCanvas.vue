<template>
  <div class="funcCanvas" v-show="basiccShowCA">
    <div class="back" @click.stop.prevent="backtoApp"></div>
    <div class = paintBoard>
      <div class="leftShow"><input type="text" class="showLeft" placeholder="左端点"></div>
      <div class="rightShow"><input type="text" class="showRight" placeholder="右端点"></div>
      <button class="clearca">清除</button>
      <div class="inputFunc"><input type="text" class="funcInput" placeholder="函数体"></div>
      <button class="getPaining" @click="paintingNow">绘制</button>
    </div>
    <div class="split"></div>
    <div class="painCanvas">
      <canvas class="mycanvas"  width="2000"
              height="2000"></canvas>
    </div>
  </div>
</template>

<script>
import {funcCanvas} from '../../common/js/funcCanvas'
import * as math from 'mathjs'
var transfer = []
export default {
  name: 'funcCanvas',
  props: {
    headerShow5: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      basiccShowCA: this.headerShow5,
      finalResults: '',
      tempResults: []
    }
  },
  created () {

  },
  mounted () {
    var drawing = document.getElementsByClassName('mycanvas')[0]
    console.log('haha' + drawing)
    if (drawing.getContext) {
      var context = drawing.getContext('2d')
      context.clearRect(0, 0, 2000, 2000)
      context.scale(2, 2)
      context.beginPath()
      context.strokeStyle = 'gray'

      context.strokeRect(10, 10, 10, 10)
      context.fillStyle = 'black'
      context.textBaseline = 'top'

      context.lineWidth = 1
      for (var i = 0; i < 50; i++) {
        for (var j = 0; j < 50; j++) {
          context.strokeRect(20 * j, 20 * i, 20, 20)
        }
      }
      context.stroke()
      context.beginPath()
      context.strokeText(0, 500, 500)
      for (i = 1; i <= 40; i++) {
        i = i.toString()
        console.log('鞋子')
        context.strokeText(i, 500 + 20 * i, 500)
        context.strokeText(i, 500, 500 - 20 * i)
        context.strokeText('-' + i, 500 - 20 * i, 500)
      }
      context.stroke()
    }
  },
  beforeUpdate () {
    this.basiccShowCA = this.headerShow5
    console.log('子组件被创建时的状态' + this.basiccShowCA)
  },
  beforeDestroy () {
    this.basiccShowCA = !this.basiccShowCA
    let headerShowitCA = !this.basiccShowCA
    console.log('事件是执行了的')
    this.$emit('headerShowitCA', headerShowitCA)
  },
  methods: {
    backtoApp () {
    },
    paintingNow () {
      var drawing = document.getElementsByClassName('mycanvas')[0]
      console.log('haha' + drawing)
      if (drawing.getContext) {
        var context = drawing.getContext('2d')
      }
      console.log('dd')
      var re = /x/g
      transfer = funcCanvas()()
      console.log(transfer)
      var newa1 = transfer[0]
      newa1 = math.compile(newa1)
      newa1 = newa1.eval()
      console.log(newa1)
      var newb1 = transfer[1]
      newb1 = math.compile(newb1)
      newb1 = newb1.eval()
      var newc = transfer[2]
      var nnewc = newc
      newc = newc.replace(re, (newa1))
      newc = math.compile(newc)
      newc = newc.eval()
      context.strokeStyle = 'red'
      context.moveTo(newa1, newc)
      for (var i = newa1; i <= newb1; i++) {
        var tempexpf = nnewc.replace(re, i)
        tempexpf = math.compile(tempexpf)
        tempexpf = tempexpf.eval()
        var tempexpf1 = nnewc.replace(re, (i + 1))
        tempexpf1 = math.compile(tempexpf1)
        tempexpf1 = tempexpf1.eval()
        console.log('绘图中' + i + ',' + tempexpf)
        context.lineTo(i, tempexpf)
        // context.lineTo(i+1+300,-tempexpf1+300)
      }
      context.stroke()
    }
  }
}
</script>

<style scoped>
  .funcCanvas  .back{
    font-size: 40px;
  }
  .funcCanvas .paintBoard{
    width: 100%;
    height: 40px;
  }
  .funcCanvas .paintBoard .leftShow{
    width: 50%;
    height: 30px;
    float: left;
  }
  .funcCanvas .paintBoard .leftShow>input{
    width: 180px;
    height: 30px;
    border-radius: 12px;
    font-size: 20px;
    background: rgba(0,130,151,0.1);
    border: 1px solid #00A0F4;
    border-radius: 8px;
  }
  .funcCanvas .paintBoard .rightShow{
    width: 49%;
    height: 30px;
    float: left;
  }
  .funcCanvas .paintBoard .rightShow>input{
    width: 186px;
    height: 30px;
    border-radius: 12px;
    font-size: 20px;
    background: rgba(0,130,151,0.1);
    border: 1px solid #00A0F4;
    border-radius: 8px;
  }
  .funcCanvas .paintBoard .inputFunc{
    width: 50%;
    height: 40px;
    margin-left: 5px;
    float: left;
    margin-top: 5px;
  }
  .funcCanvas .paintBoard .clearca{
    width: 80px;
    height: 40px;
    float: left;
    margin-top: 5px;
    background: #2D6CC2;
    border-radius: 8px;
    border: 1px solid #00A0F4;
    color: white
  }
  .funcCanvas .paintBoard .inputFunc>input{
    width: 186px;
    height: 35px;
    border-radius: 12px;
    font-size: 20px;
    background: rgba(0,130,151,0.1);
    border: 1px solid #00A0F4;
    border-radius: 8px;
  }
  .funcCanvas .paintBoard .getPaining{
    width: 80px;
    height: 40px;
    float: left;
    margin-left: 5px;
    margin-top: 5px;
    background: #2D6CC2;
    border-radius: 8px;
    border: 1px solid #00A0F4;
    color: white
  }
  .funcCanvas .split{
    width: 100%;
    height: 2px;
    float: left;
    margin-top: 5px;
    background: white;
  }
  .funcCanvas .painCanvas{
    overflow: scroll;
    float: left;
    transform:scale(0.5,0.5);
    margin-left: -500px;
    margin-top: -500px;
    width: 2000px;
    height: 2000px;
  }
  .funcCanvas .painCanvas .mycanvas{
    margin-left: 0px;
    position: absolute;
  }
</style>
