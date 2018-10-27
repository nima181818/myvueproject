<template>
  <div class="relogin">
    <div class = "namearea">
      <input type="text" v-model="loginname"
             ref="textHtml"
             v-validate ="'required|alpha_num'"
             name="mylogin">
      <span v-show="errors.has('mylogin')">{{errors.first('mylogin')}}</span>
    </div>
    <div class = "codeArea">
      <input type="password"
             ref="codeHtml"
             width="100%" height="20" v-model="loginpassword" >
    </div>
    <div class="logreg">
      <div class="loging" @click="validfy">登录</div>
      <div class="reg" @click="registerIt">注册</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Detail',
  data: function () {
    return {
      loginname: '',
      loginpassword: '',
      id: '5bcf18ba2620941f685c9e99',
      name: '666',
      password: '777'
    }
  },
  methods: {
    validfy (id) {
      console.log('dede')
      // 实现登录
      var url = 'http://localhost:8066/hero/loging'
      var textHtml = this.$refs.textHtml.value
      var codeHtml = this.$refs.codeHtml.value
      this.name = textHtml
      this.password = codeHtml
      this.$axios({
        method: 'post',
        url: url,
        data: {
          name: this.name,
          password: this.password
        },
        header: {
          'Content-Type': 'x-www-form-urlencoded'
        }
      })
        .then(function (res) {
          // console.log(res)
          if (res.data.status === 123) {
            console.log(res.data.status)
            alert('登录成功')
          } else {
            alert('登录失败')
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    registerIt () {
      console.log('注册点击成功')
      // 实现登录
      var url = 'http://localhost:8066/hero/register'
      var textHtml = this.$refs.textHtml.value
      var codeHtml = this.$refs.codeHtml.value
      this.name = textHtml
      this.password = codeHtml
      if (this.name !== '' && this.name !== '') {
        this.$axios({
          method: 'post',
          url: url,
          data: {
            name: this.name,
            password: this.password
          },
          header: {
            'Content-Type': 'x-www-form-urlencoded'
          }
        })
          .then(function (res) {
            // console.log(res)
            if (res.data.status === 1) {
              console.log(res.data.status)
              alert('注册成功')
            } else {
              alert('注册失败')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
}
</script>

<style scoped>
  .relogin .namearea>input{
    width: 60%;
    height:30px;

    margin-top: 40%;
    margin-left: 20%
  }
  .relogin .codeArea>input{

    width: 60%;
    height:30px;
    margin-top: 10%;
    margin-left: 20%
  }
  .relogin .logreg{
    margin-left: 22%;
    display: flex;
    margin-top:10px;
  }
  .relogin .logreg .loging{
    width: 100px;
    height: 30px;
    background-color: darkcyan;
    color: white;
    text-align: center;
    line-height: 28px;
  }
  .relogin .logreg .reg{
    width: 100px;
    height: 30px;
    margin-left: 10px;
    background-color: darkcyan;
    color: white;
    text-align: center;
    line-height: 28px;
  }
</style>
