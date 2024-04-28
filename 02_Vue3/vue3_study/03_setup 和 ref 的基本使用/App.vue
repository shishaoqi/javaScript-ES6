<template>
  <h2>setup 和 ref 的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="updateCount">更新</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  // 需求：页面打开后，可以直接看到一个数据，点击按钮后，该数据可以发生变化
  // v2 实现方法
    // data() {
    //     return {
    //         count: 0, // 属性
    //     }
    // },
    // methods: {
    //     updateCount(){ // 方法
    //         this.count++
    //     }
    // },


  // v3 实现方法
  setup(){
    //let count = 0 // 此时此变量并不是响应式的
    const count = ref(0)//ref是一个函数，作用：定义一个响应式的数据

    function updateCount(){
        console.log('exected updateCount()')
        //count++//报错是的原因是：count 是一个Ref对象，对象不能进行++
        count.value++
    }

    // 返回的是一个对象
    return {
        // 属性
        count,
        // 方法
        updateCount
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
