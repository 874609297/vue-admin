<template>
    <div>
        user界面
    </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import '../../../mock/index'
import {getUserList} from "../../network/user"
export default({
    name:'user',
    setup() {
        let userList = reactive([])
        onMounted(()=>{
            getUserList().then((res)=>{
                console.log(res);
            })
        })
    }
})
</script>