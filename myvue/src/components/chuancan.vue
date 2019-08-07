<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>通过localStorage.setItem将值保存到本地 和 localStorage.getItem 接收到的值是:{{r_message}}</p>
    <p>通过localStorage.setItem将值保存到本地 和 localStorage.getItem 接收到的值是:{{r_msg}}</p>
    <button @click='chuancan'>接收参数函数</button>
    <!-- <p>{{router_query}}</p>
    <p>{{push_query}}</p> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to chuancan 页面 内容都是 hellow 页面传送过来的',
      r_message: null, // 利用localStorage.getItem接收值的变量
      r_msg: null // 利用localStorage.getItem接收值的变量
      // router_query: null, // 利用 router-link传参接收值的变量
      // push_query: null // 利用push query 产参接收值的变量
    }
  },
  methods: {
    chuancan: function () {
      this.r_message = localStorage.getItem('r_message') // 利用getItem接收保存到本地的参数 HelloWorld页面localStorage.setItem保存到本地的参数
      this.r_msg = localStorage.getItem('r_msg')
      console.log(this.r_message)
    }
    // query: function () {
    //   this.router_query = this.$route.query.r_query // 利用query接收 router-link
    //   this.push_query = this.$route.query.p_query // 利用query 和 push 传送来的 信息 利用query接收
    // }
  },
  created () {
    this.chuancan()
    // this.query()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
