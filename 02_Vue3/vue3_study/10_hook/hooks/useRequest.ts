//引入axios
import axios from 'axios'
import { ref } from 'vue'


//使用axios发送异步ajax请求
export default function (url:string){
    const loading = ref(true)
    const data = ref(null)
    const errorMsg = ref('')

    axios.get(url).then(response=>{
        loading.value = false
        data.value = response.data
    })
    .catch(e => {
        loading.value = false
        errorMsg.value = e.message || '未知错误'
    })

    return {
        loading,
        data,
        errorMsg
    }
}