<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{router_query}}</h2>
    <h2>{{push_query}}</h2>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      router_query: null,
      push_query: null
    }
  },
  mounted () {
    this.router_query = this.$route.query.r_query
    this.push_query = this.$route.query.p_query
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
