<template>
    <div class="header1">
        <img class="logo" @click="$_router" src="@/assets/logo.png" >
        <div class="bipu" @click="$_router">bipubipu</div>
        <div class="user">
            <Avatar icon="person" class="avatar" src="//avatars2.githubusercontent.com/u/15122564?s=460&v=4"/>
            <Icon type="more" color="white" size="20" class="more"></Icon>
        </div>
    </div>
</template>

<script>
export default {
    computed: {

    },
    methods: {
        $_router: function() {
            this.$router.push("/basic/home");
        }
    }  

}
</script>

<style scoped>
.header1 {
  height: 40px;
  background-color: #666;
}

.bipu{
  margin-left: 4px;
  color: white;
  font-size: 18px;  
  float:left;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.logo{
  height: 40px;
  margin-left: 40px;
  float:left;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.logo:hover{
  height: 39px;
}

.user{
  height: 40px;
  width: 10%;
  display:inline-block;
  float:right;
  position: relative;
}

.more{
  margin-left: 18px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);    
}

.avatar{
  position: relative;
  top: 50%;
  transform: translateY(-50%);     
}
</style>