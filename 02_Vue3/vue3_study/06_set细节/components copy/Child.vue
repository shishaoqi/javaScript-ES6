<template>
    <h2>Child子级组件</h2>
    <h3>childMsg:{{ msg }}</h3>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'a-childs',
    props: [
        'msg'
    ],

    //setup细节问题
    // .........
    beforeCreate(){ //数据初始化的生命回调
        console.log('beforeCreate executed')
    },
    mounted(){ //界面渲染完毕

    },
    setup(){
        console.log('setup executed', this)
        return {
            // setup中返回一个对象，对象中的属性和方法都可以在html模板中直接使用

        }
    }
})
</script>