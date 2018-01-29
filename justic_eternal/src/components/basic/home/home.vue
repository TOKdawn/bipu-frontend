<template>
   <div>home
       <Button type="info" @click="$_login">用户登录</Button>
      <Button type="error" @click="$_routerUser" >个人中心</Button>
   </div>
     
</template>

<script>
import store from "@/vuex/index.js"; // 权限表 
export default {
    components: {
    },
    methods:{
        $_login: function(){
              var userData = {
              role: 10,
              name: 'dawn',
              img: '//avatars2.githubusercontent.com/u/15122564?s=460&v=4',
              id: 199644
            };
            store.commit("updata", userData);
            console.log('登录成功')
        },
        $_routerUser: function(){
             this.$router.push({ name: "user", params: { userId: store.state.userData.id} });
        }
    }
}
</script>

<style scoped>


</style>
