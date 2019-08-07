<template>
<div>
  <div class="demo" ref='testDom'>
    <div>123456
      <div class="a">
        abcdef
      </div>
    </div>
  </div>
  <button @click="getref"> 利用ref 获取 DOM </button>
  <button @click="getscrollto"> 利用scrollto制作的页面下滑 </button>
  <button @click="getscrollby"> 利用scrollby制作的页面下滑 </button>
  <button @click='getwidth'>计算页面宽高</button>
</div>
</template>
<script>
export default {
  data () {
    return {
      scrolltop: null,
      scrollheight: null,
      width: null,
      height: null,
      i: 0,
      roll: null,
      totroll: null
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true) // 由于vue没有检测滚动条的方法所以用window方法来检测滚动条的行为
  },
  methods: { // html加载完成后执行。执行顺序：子组件-父组件
    getscrollto: function () { // 利用scrollTo 制作的页面向下滚动 每次滚动到设定的位置
      this.scrollheight = this.$refs.testDom.scrollTop
      this.scrollheight = this.scrollheight + 200
      this.$refs.testDom.scrollTo(0, this.scrollheight)
      console.log(this.$refs.testDom.scrollTop)
    },
    getref: function () { // 利用scrollTop 获取页面当前位置滚动条到顶端的距离
      this.scrolltop = this.$refs.testDom.scrollTop
      console.log(this.scrolltop)
    },
    getscrollby: function () { // 利用scrollBy 制作向下滚动 每次滚动300
      this.$refs.testDom.scrollBy(0, 300)
      this.scrollheight = this.$refs.testDom.scrollTop
      console.log(this.scrollheight)
    },
    getwidth: function () { // 获取页面的宽度和高度 scrollWidth scrollHeight
      this.width = this.$refs.testDom.scrollWidth
      this.height = this.$refs.testDom.scrollHeight
      console.log(this.width)
      console.log(this.height)
    },
    handleScroll: function () { // 判断滚动条是向上还是向下
      this.roll = this.$refs.testDom.scrollTop
      this.totroll = this.roll - this.i
      this.i = this.roll
      if (this.totroll > 0) {
        console.log('down')
      } else {
        console.log('up')
      }
    }
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
