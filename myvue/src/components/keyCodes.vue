<template>
<div class='codes'>
  <!-- 利用show=!show实现toggle开关功能 -->
  <div>
    <p v-if='show'>显示和隐藏的功能</p>
    <button v-on:click='show =! show'>toggle</button>
  </div>
  <!-- 利用函数增大字体 -->
<div>
  <p v-bind:style="styleObject">增大字号</p>
  <button @click="add">add</button>
</div>
<!-- 多行文本数据双向绑定 -->
<div>
  <span>Message is: {{message}}</span><br>
  <textarea v-model="message"></textarea>
</div>
<!-- 单个复选框，绑定到布尔值 -->
<div>
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{checked}}</label>
</div>
<!-- 多个复选框，绑定到同一个数组： -->
<div>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
</div>
<!-- 单选按钮 -->
<div>
  <input type="radio" id="one" value="One" v-model="picked">
  <label for='One'>One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="Two">Two</label>
  <br>
  <span>{{picked}}</span>
</div>
<!-- 选择框 -->
<div>
  <select v-model="selected">
    <option disabled value=''>请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{selected}}</span>
</div>
<!-- 选择框多选 -->
<div>
<select v-model="selecteds" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<br>
<span> Selected: {{selecteds}} </span>
</div>
<!-- 用 v-for 渲染的动态选项 -->
<div>
  <select v-model="selecte">
    <option v-for="option in options" :key="option.valeu" :value="option.value">
      {{option.text}}
    </option>
  </select>
   {{selecte}}
</div>
<!-- lazy 修饰符，从而转变为使用 change 事件进行同步 -->
<input type='text' v-model.lazy="msg"><br>
<span>lazy 转变为使用 change 事件进行同步:{{msg}}</span>
<br>
<!-- number 用户的输入值转为数值类型 -->
<input type='text' v-model.number='age'><br>
<span>number 用户的输入值转为数值类型:{{age}}</span>
<br>
<!-- trim 自动过滤用户输入的首尾空白字符 -->
<input type='type' v-model.trim='mr'><br>
<span>trim 自动过滤用户输入的首尾空白字符:{{mr}}</span>
</div>
</template>
<script>
export default {
  name: 'keyCodes',
  data () {
    return {
      show: true,
      styleObject: {
        fontSize: '20px',
        color: 'green',
        size: 20,
        font: 'px'
      },
      selecte: 'A',
      options: [
        {text: 'One', value: 'A'},
        {text: 'Two', value: 'B'},
        {text: 'three', value: 'C'}
      ],
      message: null,
      checked: 'true',
      checkedNames: [],
      picked: null,
      selected: null,
      selecteds: [],
      msg: null,
      age: null,
      mr: null
    }
  },
  methods: {
    add: function () {
      this.styleObject.size += 10
      this.styleObject.fontSize = this.styleObject.size + this.styleObject.font
      console.log(this.styleObject.fontSize)
    }
  },
  created () {
    // this.jieshou()
  }
}
</script>
