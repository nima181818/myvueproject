<template>
  <div class="newsofmath" v-show="basiccShowNE">
    <div class="back" @click.stop.prevent="backtoApp"></div>
    <div class="legends-wrapper">
      <ul>
        <li v-for="(item,index) in legends" :key = "index" @click.stop.prevent = "showdetail($event)"  ref="avators">
          <div class = "avator"  v-show="avatorShow">
            <img width="100" height="100" :src="item.avator">
            <div class="theirname">中文名:{{item.name}}</div>
            <div class="live-death">生卒日期:{{item.bdeath}}</div>
            <div class="findings">主要成就:{{item.findings}}</div>
          </div>
        </li>
        <div class="detail" v-show="detailShow">
          <div class="textPlace">{{itemDetails.detail}}</div>
        <div class = "closetextPlace" @click = "hiddendetail">×</div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
var temp = 1
export default {
  name: 'newsofmath',
  props: {
    headerShow6: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      basiccShowNE: this.headerShow6,
      legends: [],
      detailShow: false,
      itemDetails: '',
      avatorShow: true
    }
  },
  beforeUpdate () {
    this.basiccShowNE = this.headerShow6
    console.log('子组件被创建时的状态' + this.basiccShowNE)
  },
  created () {
    this.$http.get('http://120.78.136.131:8066/all')
      .then((response) => {
        var response1 = response.body
        this.legends = response.body
        console.log('q请求已经发送' + response1)
        console.log('获取的请求为' + this.legends)
      })
    // var url = 'http://120.78.136.131:8066/all'
    // this.$axios({
    //   method: 'get',
    //   url: url
    // }).then(function (res) {
    //   // console.log(res)
    //   this.legends = res.body
    //   alert('接收数据成功')
    //   console.log('获取的请求为' + this.legends)
    // })
  },
  methods: {
    backtoApp () {
      this.basiccShowNE = !this.basiccShowNE
      let headerShowitNE = !this.basiccShowNE
      console.log('事件是执行了的')
      this.$emit('headerShowitNE', headerShowitNE)
    },
    showdetail (e) {
      var avators = this.$refs.avators
      this.detailShow = !this.detailShow
      this.avatorShow = !this.avatorShow
      var thisTarget = e.currentTarget
      console.log(avators)
      console.log(typeof (thisTarget))
      console.log('当前选中的为' + thisTarget) // 正确
      for (var i = 0; i < avators.length; i++) {
        if (avators[i] === thisTarget) {
          temp = i
          console.log('if内的' + temp)
        }
        console.log('for内的' + temp)
      }
      console.log(temp)
      console.log('哈哈' + avators[1])
      // console.log(temp);
      this.itemDetails = this.legends[temp]
      console.log(this.itemDetails)
    },
    hiddendetail () {
      this.detailShow = !this.detailShow
      this.avatorShow = !this.avatorShow
    }
  },
  beforeDestroy () {
    this.basiccShowNE = !this.basiccShowNE
    let headerShowitNE = !this.basiccShowNE
    console.log('事件是执行了的')
    this.$emit('headerShowitNE', headerShowitNE)
  }

}
</script>

<style scoped>
  .newsofmath .back{
    font-size: 40px;
  }
  .newsofmath .legends-wrapper{
    overflow:scroll
  }
  .newsofmath .legends-wrapper>ul{
    width: 100%;
    font-size: 0;
    padding: 4px
  }
  .newsofmath .legends-wrapper>ul>div>li{
    list-style: none
  }
  .newsofmath .legends-wrapper .avator{
    width: 100%;
    height: 100px;
    border-radius: 10px;
    list-style:none;
    margin-top: 10px;
    background-color: #7895AB;
    position: relative;
    overflow: hidden;  /*也可以用 width:0 代替*/
    flex: 1;   /*关于flex的属性值请看官网，这里相当于 flex-grow */
  }
  .newsofmath .legends-wrapper .avator .theirname{
   width: 200px;
    height: 20px;
    position: absolute;
    top: 0px;
    left: 110px;
    font-size: 15px
  }
  .newsofmath .legends-wrapper .avator .live-death{
    width: 250px;
    height: 20px;
    position: absolute;
    top: 20px;
    left: 110px;
    font-size: 15px
  }
  .newsofmath .legends-wrapper .avator .findings{
    width: 250px;
    height: 45px;
    position: absolute;
    top: 60px;
    left: 110px;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .newsofmath .legends-wrapper .detail{
    width: 100%;
    height: 100vh;
    position: absolute;
    top:0px;
    font-size: 15px;
    background-color: #7895AB;
    overflow: scroll
  }
  .newsofmath .legends-wrapper .detail .textPlace{
    width: 90%;
    height: 90%;
    font-size: 15px;
    padding: 20px;
    overflow: scroll
  }
  .newsofmath .legends-wrapper .detail .closetextPlace{
    font-size: 40px;
    position: fixed;
    bottom: 0px;
    left: 49%;
    color: red;
  }
</style>
