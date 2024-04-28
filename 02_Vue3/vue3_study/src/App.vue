<template>
    <h2>自定义hook函数操作</h2>
    <h2>x:{{ x }}, y:{{ y }}</h2>

    <h3 v-if="loading">正在加载中...</h3>
    <h3 v-else-if="errorMsg">错误信息：{{ errorMsg }}</h3>
    <ul v-else>
        <li>id--:{{ data.id }}</li>
        <li>address:{{ data.address }}</li>
        <li>distance:{{ data.distance }}</li>
    </ul>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useRequest from './hooks/useRequest';

// 地址数据接口
interface AddressResult {
  id: number;
  name: string;
  distance: string;
}

export default defineComponent({
    name:'App',

    setup(){
        const {x, y} = useMousePosition()
        const {loading, data, errorMsg} = useRequest('/data/address.json')

        return {
            x,
            y,
            loading,
            data,
            errorMsg
        }
    }
})
</script>