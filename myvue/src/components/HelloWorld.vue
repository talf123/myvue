<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>
      <router-link to="vue">vue练习语法</router-link>
      <router-link to="es6">es6语法练习</router-link>
      <router-link to="keyCodes">vue中的表单</router-link>
    </div>
    <!-- 页面通过router-link传参制作点击事件传参 -->
    <div>
      <router-link :to="{path:'/query', query: {r_query: router_query}}">router-link query 传参</router-link>
      <router-link :to="{name:'params', params: {r_params: router_params}}">router-link params 传参</router-link>
    </div>
    <!-- push和query组件传参 -->
    <div>
      <br>
      <input type='text' v-model='push_query'>
      <p>{{push_query}}</p>
      <button @click="query">query传参</button>
    </div>
    <!-- push 和 params组件传参 -->
    <div>
      <br>
      <input type='text' v-model='push_params'>
      <p>{{push_params}}</p>
      <button @click="params">params传参</button>
    </div>
    <!-- vue中通过ref控制DOM -->
    <div>
      <router-link to='ref'>vue通过ref操作DOM</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这里是helloWorld页面',
      r_msg: '利用setItem 和 getItem 进行的页面之间的传参', // 通过localStorage.setItem 上传到页面的数据
      r_message: 'Routing reference 路由传参 利用了setItem传送参数，然后在接收页面利用getItem接收参数', // 通过localStorage.setItem 上传到页面的数据
      router_query: '利用router-link 和 query 进行的组件传参', // 向query页面传的参数
      router_params: '利用router-link 和 params 进行的组件传参', // 向params页面传参数
      push_query: null, // 通过 push 向query页面传的参数
      push_params: null // 通过 push 向params页面传的参数
    }
  },
  methods: {
    chuansong: function () { // 页面传送参数函数
      localStorage.setItem('r_message', this.r_message) // 利用localStorage.setItem 把数据保存到本地
      localStorage.setItem('r_msg', this.r_msg)
    },
    query: function () { // query 组件传参
      this.$router.push({path: '/query', query: {p_query: this.push_query}})
    },
    params: function () { // params 组件传参 注意 params 使用 name 传参数 name值前没有 /
      this.$router.push({name: 'params', params: {p_params: this.push_params}})
    }
  },
  created () {
    this.chuansong()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: fixed;
  left: 5px;
}
a{text-decoration: none;}
</style>
