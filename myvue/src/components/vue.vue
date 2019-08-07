<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- v-once 绑定内容只改变一次 -->
  <div>
    <p>{{m1}}</p>
    <p v-once>这里的内容不会根据绑定内容的改变而改变 {{m1}}</p>
    <button v-on:click="add">add</button>
  </div>
    <!-- v-html 双大括号会将数据解释为纯文本，而非 HTML 。为了输出真正的 HTML ，你需要使用 v-html 指令 -->
    <div v-html="rawHtml"></div>
    <!-- v-bind指令绑定属性或类,通过v-bind使属性中的数据可以和v-model数据绑定 -->
    <div>
      <p v-bind:id="myid">v-bind指令属性或类绑定</p>
      <p v-bind:class="{red: bind_a,blue: bind_b}">v-bind的用法是同时传入一个或多个class类或style属性</p>
      <button v-on:click="colorchose">colorchose</button>
      <!-- v-bind指令绑定style内联样式 加上中括号可以绑定多个style内联样式 -->
      <p v-bind:style="[styleObject]">通过bind绑定style内联样式</p>
      <p v-bind:style="[styleObject,styleObject2]">通过bind绑定多个style内联样式</p>
    </div>
    <!-- v-if指令 判断指令 -->
    <div>
      <p v-if='seen'>v-if判断语句 显示</p>
      <p v-else>v-if语句 不显示</p>
      <button @click='vifchose'>v-if判断内容是否显示</button>
    </div>
    <!-- v-show指令 根据条件展示元素 不同的是带有 v-show 的元素始终会被渲染并保留在DOM中 -->
    <!-- v-show 只是简单地切换元素的 CSS 属性 display -->
    <div>
      <p v-show="show_a">v-show 只是简单地切换元素的 css 属性 display</p>
      <button @click="show">show</button>
    </div>
    <!-- v-for指令 循环指令 key管理可以复用的元素的指令-->
    <!-- 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性： -->
    <!-- in 可以替换成为 of -->
    <div>
      <ol class="navList">
        <li v-for="item in todos" :key='item.text'>
          {{ item.text }}
        </li>
      </ol>
    </div>
    <!-- v-for指令 循环对象 -->
    <div>
      <ol id="v-for-object" class="navList">
        <li v-for="(value,name) in object" :key='name'>
          {{name}}:{{value}}
        </li>
      </ol>
    </div>
    <!-- 利用vue带的 v-if，v-else-if, v-else语句完成的多选项判断 -->
    <div>
      <p v-if="type === '1'">壹</p>
      <p v-else-if="type === '2'">贰</p>
      <p v-else-if="type === '3'">叁</p>
      <p v-else>没有</p>
      <input type='text' v-model="type">
    </div>
    <!-- 利用 Math.random 获取随机数进行 v-if 语句的判断 -->
    <div>
      <p v-if="Math.random() > 0.5">判断成功!</p>
      <p v-else>判断失败!</p>
    </div>
    <!-- v-on指令处理事件 和 翻转内容 ob是验证计算属性 computed 和方法 methods的差别 -->
    <div>
      <!-- 这里的ob是computed中定义的ob函数的返回值 -->
      <p>{{ob}}</p>
      <p>{{v_on}}</p>
      <button @click='on'>翻转</button>
    </div>
    <!-- 利用 computed 验证属性 当数值改变后触发更新 完成多选项判断,利用函数中的if,else if,else -->
    <div>
      <p>{{oc}}</p>
      <input type='text' v-model="judge">
    </div>
    <!-- v-model 双向数据绑定 -->
    <div>
      <p>这里是双向数据绑定的值：{{v_model}}</p>
      <input type="text" v-model="v_model">
    </div>
    <br>
    <!-- 带有传入值的函数 -->
    <div>
      <button v-on:click="say('你好！')">Say hi</button>
      <button @click="say('什么！')">Say what</button>
      <input v-on:keydown.right="say('什么！')" value='right' type='submit'>
    </div>
    <!-- 侦听属性 watch -->
    <div>
      <p>{{fullName}}</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'vue',
  data () {
    return {
      msg: 'vue 语法实例', // 语法绑定，这里定义的内容会在页面上双括号里的定义的值的地方显示
      m1: 1,
      rawHtml: '<p style="color:red">v-html输出html内容</p>',
      bind_a: true,
      bind_b: false,
      myid: 'green',
      seen: true,
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ],
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
      v_on: 'Hello vue !',
      v_ob: 'Hello vue !',
      v_model: 'v-model ！',
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',
      styleObject: { // CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名：
        color: 'pink'
        // fontSize: '25px'
      },
      styleObject2: { // CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名：
        // color: 'pink',
        fontSize: '25px'
      },
      judge: '1',
      type: '2',
      show_a: true,
      show_b: false
    }
  },
  methods: { // 方法
    add: function () { // v- once 中的加法函数
      this.m1 = this.m1 + 1
      console.log(this.m1)
    },
    colorchose: function () { // v-bind切换颜色函数
      if (this.bind_a === true) {
        this.bind_a = false
        this.bind_b = true
      } else {
        this.bind_a = true
        this.bind_b = false
      }
    },
    vifchose: function () { // v-if判断语句
      if (this.seen === true) {
        this.seen = false
      } else {
        this.seen = true
      }
    },
    on: function () { // v-on 事件指令
      this.v_on = this.v_on.split('').reverse('').join('')
      // 1、splite(' ')可以将字符串按某个字符或者其他分割。返回数组。
      // 2、reverse()该方法会改变原来的数组，而不会创建新的数组。此函数可以将数组倒序排列。
      // 3、join()方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。指定分隔方法join(' ');
    },
    show: function () { // v-show 指令 和 v-if 有一点相似但是不同的是v-show不是条件渲染只是单纯的切换元素显示与否
      if (this.show_a === true) {
        this.show_a = false
      } else {
        this.show_a = true
      }
    },
    say: function (message) {
      alert(message)
    }
  },

  watch: { // 侦听属性
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }

  },
  computed: { // 计算属性 computed 中的内容有返回值但是无法通过V-on：click()触发事件 计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
    ob: function () { // v-on 事件指令
      return this.v_ob.split('').reverse('').join('')
    },
    oc: function () {
      if (this.judge === '1') {
        return '壹'
      } else if (this.judge === '2') {
        return '贰'
      } else if (this.judge === '3') {
        return '叁'
      } else {
        return '超出范围'
      }
    }
  },
  created () { // 页面开始执行的内容，可以有函数等 执行顺序：父组件-子组件
    alert('vue语法练习')
  },
  mounted () { // html加载完成后执行。执行顺序：子组件-父组件
  }
}
</script>
<style scoped>
#green{
  color:green;
}
#pink{
  color:pink;
}
#size{
  font-size: 15px;
}
.navList{
  list-style:none;
}
.red{
  color:red;
}
.blue{
  color:blue;
}
</style>
