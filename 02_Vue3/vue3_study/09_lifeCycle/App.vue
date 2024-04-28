<template>
    <div class="about">
      <h2>msg: {{msg}}</h2>
      <button @click="isShow=!isShow">切换显示</button>
      <hr>
      <Child v-if="isShow"/>
      <button @click="update">更新</button>
    </div>
    </template>
    
    <script lang="ts">
    import Child from './components/Child.vue'
    import {
      ref,
      onMounted,
      onUpdated,
      onUnmounted, 
      onBeforeMount, 
      onBeforeUpdate,
      onBeforeUnmount
    } from "vue"
    
    export default {
        name: "App",
        // 注册组件
        components:{
            Child
        },

      beforeCreate () {
        console.log('2.x中的 beforeCreate()')
      },
    
      created () {
        console.log('2.x中的 created')
      },
    
      beforeMount () {
        console.log('2.x中的 beforeMount')
      },
    
      mounted () {
        console.log('2.x中的 mounted')
      },
    
      beforeUpdate () {
        console.log('2.x中的 beforeUpdate')
      },
    
      updated () {
        console.log('2.x中的 updated')
      },
    
      // beforeDestroy 
      // beforeUnmount () {
      beforeUnmount(){
        console.log('beforeUnmount---------2.x中的')
      },
    
      // destroyed // unmounted
      unmounted () {
         console.log('unmounted----------2.x中的')
      },
      
    
      setup() {
        console.log('3.0中的 setup')
        
        const msg = ref('abc')
        const isShow = ref(true)
    
        const update = () => {
          msg.value += '--'
        }
    
        onBeforeMount(() => {
          console.log('3.0中的--onBeforeMount')
        })
    
        onMounted(() => {
          console.log('3.0中的--onMounted')
        })
    
        onBeforeUpdate(() => {
          console.log('3.0中的--onBeforeUpdate')
        })
    
        onUpdated(() => {
          console.log('3.0中的--onUpdated')
        })
    
        onBeforeUnmount(() => {
          console.log('3.0中的--onBeforeUnmount')
        })
    
        onUnmounted(() => {
          console.log('3.0中的--onUnmounted')
        })
        
        return {
          msg,
          isShow,
          update
        }
       }
    }
    </script>