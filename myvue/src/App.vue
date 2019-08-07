<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 设置分页显示的时候需要设置router-view -->
    <router-view name='top'></router-view>
    <router-view name='center'></router-view>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
