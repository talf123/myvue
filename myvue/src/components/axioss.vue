<template>
<div>
  <p>{{a}}</p>
  <Button @click="getRoleList()">按钮</Button>
</div>
</template>
<script>
export default {
  data () {
    return {
      a: 'axios使用前 需要 先安装 然后 在main.js中配置axios. 在config文件中的prod.env.js中的地址需要配置. 其他文件index.js直接拷贝就可以. 需要在src assets js中复制 axios.js的文件'
    }
  },
  mounted () {
  },
  created () {
  },
  methods: {
    getRoleList:function(){
      console.log('1')
        // let token =localStorage.getItem('g_token');
        // let id =localStorage.getItem('g_id'); //定义一个用于接收ID的变量
        this.$axios({  
          url: '/getSysTime.do',// 页面总列表 id是获取的页面ID用于判断是否是操作员
          method: 'get',
          //params参数必写 , 如果没有参数传{}也可以
          headers:{
              Authorization:'Bearer '
          },
          data:{  
          }
        })
        .then((res)=>{
          console.log(res)
        })
        .catch((err)=>{
          console.log(err)
        })
      },
  },
  computed: {
  }
}
</script>
<style>
.demo{
  background-color: burlywood;
  overflow: auto;
  max-height: 600px;
}
.a{
  background-color: cornflowerblue;
  height: 3000px;
}
</style>
