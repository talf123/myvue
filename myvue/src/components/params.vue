<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{router_params}}</h2>
    <h2>{{push_params}}</h2>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      router_params: null,
      push_params: null
    }
  },
  mounted () {
    this.router_params = this.$route.params.r_params
    this.push_params = this.$route.params.p_params
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
