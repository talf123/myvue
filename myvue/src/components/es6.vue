<template>
<div class="hello">
  <!-- push()和pop() 添加 删除原数组的最后一项，并返回元素的值 -->
  <div>
    <h1>{{fn}}</h1>
    <p v-once>{{push_arr}}</p>
    <p>{{push_arr}}:{{push_count}}</p>
    <p>{{pop_item}}</p>
    <button @click="push">push 添加功能</button>
    <button @click="pop">pop 删除功能</button>
  </div>
  <!-- shift() 和 unshift() 添加 删除原数组第一项，并返回删除元素的值 -->
  <div>
    <p v-once>{{unshift_arr}}</p>
    <p>{{unshift_arr}}:{{unshift_count}}</p>
    <p>{{shift_item}}</p>
    <button @click="unshift">unshift 添加功能</button>
    <button @click="shift">shift 删除功能</button>
  </div>
  <!-- sort() 按升序排列数组项——即最小的值位于最前面，最大的值排在最后面 -->
  <div>
    <p v-once>{{sort_arr}}</p>
    <p>{{sort_arr}}</p>
    <p>{{sort_arr2}}</p>
    <p>sort方法比较的是字符串，所以数值会比较错误 </p>
    <p v-once>{{sort_arr1}}</p>
    <p>{{sort_arr1}}</p>
    <button @click="sort">sort 升序排列功能</button>
  </div>
  <!-- reverse() 反转数组项的顺序 -->
  <div>
    <p v-once>{{reverse_arr}}</p>
    <p>{{reverse_arr}}</p>
    <button @click="reverse()">reverse 反转数组功能</button>
  </div>
  <!-- concat() 将参数添加到原数组中 -->
  <div>
    <p>{{concat_arr}}</p>
    <p>{{copy_concat_arr}}</p>
    <button @click="concat()">concat 添加功能</button>
  </div>
  <!-- slice() 返回从原数组中指定开始下标到结束下标之间的项组成的新数组 -->
  <div>
    <p>{{slice_arr}}</p>
    <p>{{copy_slice_arr}}</p>
    <button @click="slice()">slice 返回部分数组功能</button>
  </div>
  <!-- splice() 删除、插入和替换 -->
  <div>
    <p v-once>{{splice_arr}}</p>
    <p>{{splice_arr}}</p>
    <p>{{del_splice_arr}}</p>
    <button @click="del_splice()">splice 删除功能</button>
    <p v-once>{{splice_arr}}</p>
    <p>{{splice_arr}}</p>
    <p>{{ins_splice_arr}}</p>
    <button @click="ins_splice()">splice 插入功能</button>
    <p v-once>{{splice_arr}}</p>
    <p>{{splice_arr}}</p>
    <p>{{rep_splice_arr}}</p>
    <button @click="rep_splice()">splice 替换功能</button>
  </div>
  <!-- indexOf()和 lastIndexOf() -->
  <div>
    <p>{{indexOf_arr}}</p>
    <p>返回数组位数：{{index}}</p>
    <button @click="indexOf">indexxOf 查找功能</button>
  </div>
  <!-- map() -->
  <div>
  <p>{{map_arr}}</p>
  <p>{{copy_map_arr}}</p>
  <button @click="map">map 每一项运行给定函数</button>
  </div>
  <!-- filter() -->
  <div>
    <p>{{filter_arr}}</p>
    <p>{{copy_filter_arr}}</p>
    <button @click="filter">filter 筛选</button>
  </div>
  <!-- every() -->
  <div>
    <p>{{every_arr}}</p>
    <p>{{copy_every_arr}}</p>
    <button @click="every">every 判断数组中的值是否都满足条件</button>
  </div>
  <!-- some() -->
  <div>
    <p>{{some_arr}}</p>
    <p>{{copy_some_arr}}</p>
    <button @click="some">some 判断数组中的值是否有一项满足条件</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'es6',
  data () {
    return {
      a: 20,
      b: 30,
      join_arr: ['fd', 'ds0', 'km'],
      push_arr: ['fd', 'ds0', 'km'],
      push_count: null,
      pop_item: null,
      unshift_arr: [18, 19, 20],
      shift_item: null,
      unshift_count: null,
      sort_arr: ['d', 'b', 'm', 'f'],
      sort_arr1: [12, 23, 3, 2, 21],
      sort_arr2: ['12', '23', '19', '68', '21'],
      reverse_arr: [1, 20, 30, 6, 9],
      concat_arr: [12, 23, 3, 2, 21],
      copy_concat_arr: [],
      slice_arr: [1, 3, 5, 7, 9, 11],
      copy_slice_arr: [],
      splice_arr: [1, 3, 5, 7, 9, 11, 13, 15],
      del_splice_arr: [],
      ins_splice_arr: [],
      rep_splice_arr: [],
      index: null,
      indexOf_arr: [1, 2, 3, 4, 5, 6],
      map_arr: [1, 2, 3, 4, 5, 6],
      copy_map_arr: [],
      filter_arr: [1, 3, 5, 7, 9, 11, 13, 15],
      copy_filter_arr: [],
      every_arr: [1, 3, 5, 7, 9, 11, 13, 15],
      copy_every_arr: null,
      some_arr: [1, 3, 5, 7, 9, 11, 13, 15],
      copy_some_arr: null
    }
  },
  computed: {
    fn: function () {
      return this.a + this.b
    },
    compare: function (value1, value2) {
      if (value1 < value2) {
        return -1
      } else if (value1 > value2) {
        return 1
      } else {
        return 0
      }
    }
  },
  methods: {
    push: function () { // 可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。
      this.push_count = this.push_arr.push('jack', 'and', 'tom') // 返回数组中的数据个数。
    },
    pop: function () { // 数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。
      this.pop_item = this.push_arr.pop()
    },
    unshift: function () { // 将参数添加到原数组开头，并返回数组的长度 。
      this.unshift_count = this.unshift_arr.unshift('jack', 'and', 'tom')
    },
    shift: function () { // 删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 。
      this.shift_item = this.unshift_arr.shift()
    },
    sort: function () { // 按升序排列数组项——即最小的值位于最前面，最大的值排在最后面。
      this.sort_arr.sort()
      this.sort_arr1.sort() // sort 方法比较的是字符串，所以数值会比较错误
      this.sort_arr2.sort()
    },
    reverse: function () { // 反转数组项的顺序
      this.reverse_arr.reverse()
    },
    concat: function () { // 将参数添加到原数组中
      this.copy_concat_arr = this.concat_arr.concat(9, [10, 'ck'])
    },
    slice: function () { // 返回从原数组中指定开始下标到结束下标之间的项组成的新数组
      this.copy_slice_arr = this.slice_arr.slice(1, 3)
    },
    del_splice: function () { // 实现删除、插入和替换
      this.del_splice_arr = this.splice_arr.splice(1, 2) // 从数组1位开始删除两个数字
    },
    ins_splice: function () {
      this.ins_splice_arr = this.splice_arr.splice(1, 0, 9, 6) // 0表示不删除内容
    },
    rep_splice: function () {
      this.rep_splice_arr = this.splice_arr.splice(1, 1, 5, 6) // 将数据第一位的数字删除后加入5，6
    },
    indexOf: function () { // 接收两个参数：要查找的项和表示查找起点位置的索引（可选的）。
      this.index = this.indexOf_arr.indexOf(6)
    },
    map: function () { // 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
      this.copy_map_arr = this.map_arr.map(function (item) { return item * item })
    },
    filter: function () { // 数组中的每一项运行给定函数，返回满足过滤条件组成的数组
      this.copy_filter_arr = this.filter_arr.filter(function (x, index) { return index % 3 === 0 || x > 13 })
    },
    every: function () { // 中每一项都是否满足条件，只有所有项都满足条件，才会返回true
      this.copy_every_arr = this.every_arr.every(function (x) { return x > 7 })
    },
    some: function () { // 判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。
      this.copy_some_arr = this.some_arr.some(function (x) { return x > 9 })
    }
  },
  created () {
    console.log(this.join_arr.join('-')) // 将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符，该方法只接收一个参数：即分隔符。
  }
}
</script>
