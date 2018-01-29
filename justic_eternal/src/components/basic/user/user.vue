<template>
   <div>
    <h1>{{userName}}的个人主页</h1>
        <img :src="imgsrc">
   </div>
</template>

<script>
import store from "@/vuex/index.js"; // 权限表 
export default {
    data () {
        return {
            userName,
            imgsrc      
        }
    },
   created(){
       console.log(store.state.userData.img)
       this.imgsrc= store.state.userData.img
       this.userName= this.$route.params.userId;
   }
}
</script>

<style scoped>


</style>
