import {  onMounted, onBeforeUnmount, ref } from 'vue'
export default function(){
    const x = ref(-1), y = ref(-1)
        
        //点击事件的回调函数
        const clickHandler=(event: { pageX: number; pageY: number })=>{
            x.value = event.pageX
            y.value = event.pageY
        }

        //页面已经加载完毕了，再进行点击的操作
        //页面加载完毕的生命周期
        onMounted(()=>{
            window.addEventListener('click', clickHandler)
        })
        //页面卸载之前的生命周期组合API
        onBeforeUnmount(()=>{
            window.removeEventListener('click', clickHandler)
        })

        return {
            x,
            y
        }
}