<template>
  <div>haha, I become strong</div>
  <h3>{{ n }}</h3>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent } from 'vue';

// 暴露出去一个定义好的组件
export default defineComponent({
  name: 'App',
  components: {

  },
  // 新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次
  // 函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用
  setup(){
    console.log('I comming')
    const n = 10
    return {
        n
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
