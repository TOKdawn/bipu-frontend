<template>
  <div class="header">
    <div class="header1">

      <div class="nav-left">
          <Menu class="menu" mode="horizontal"  active-name="1">
            <MenuItem name="1" @click.native="$_router(1)">
                <Icon type="search"></Icon>
                主页
            </MenuItem>
            <MenuItem name="2" @click.native="$_router(2)">
                <Icon type="shuffle"></Icon>
                转谱器
            </MenuItem>
            <MenuItem name="3" @click.native="$_router(3)">
                <Icon type="ios-bookmarks"></Icon>
                谱册
            </MenuItem>
            <MenuItem name="4" @click.native="$_router(4)">
                <Icon type="ios-musical-notes"></Icon>
                佳作
            </MenuItem>
            <MenuItem name="5" @click.native="$_router(5)">
                <Icon type="android-arrow-down" ></Icon>
                APP下载
            </MenuItem>
            <MenuItem name="6" @click.native="$_router(6)">
                <Icon type="information"></Icon>
                使用说明
            </MenuItem>
          </Menu>
      </div>

      <div class="nav-right">
        <div class="user">
          <Avatar icon="person" class="avatar" src="//avatars2.githubusercontent.com/u/15122564?s=460&v=4"/>
          <Icon type="more"  size="30" class="more"></Icon>
        </div>
      </div>

    </div>
      <div v-if="($route.name !=='home' )" >
          <Input  class="search" v-model="keyword1" @on-enter="$_router1(keyword1)" placeholder="说你又想要什么奇怪的谱子 - -！" >
              <Button slot="append" icon="ios-search" @click="$_router1(keyword1)" ></Button> 
          </Input>
      </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
        keyword1: '',
      }
    },
    computed: {

    },
    methods: {

      $_router: function(routerGo) {
        switch (routerGo) {
          case 1:
            this.$router.push("/basic/home");
            break;
          case 2:
            this.$router.push("/basic/translator");
            break;
          case 3:
             this.$router.push("/basic/volumes");
            break;
          case 4:
            this.$router.push("/basic/works");
            break;
              case 5:
            this.$router.push("/basic/download");
            break;
          case 6:
            this.$router.push("/basic/instructions");
            break;
        }
      },
      $_router1: function(key) {
        // this.$router.replace({ home: 'home', params: { keyword: "key" }});
        this.$router.push({ path: `/basic/home/${key}`});
      }
  }  

};
</script>

<style scoped>

.header {
  height: 430px;
  background-image: url(../../assets/banner-3.png);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size:2200px 430px;
  z-index: 1;
}


.header1 {
  height: 60px;
  background-color: hsla(0,0%,95%,.8); 
}

.nav-left{
  margin-left: 5%;
  float: left;
  position: relative;
  top: 50%;
  transform: translateY(-50%);  
}


.menu{
  background-color: hsla(0,0%,95%,0);

}


.nav-logo{
  height: 40px;
}

.bipu:hover{
  background-color: hsla(0,0%,100%,0);
}

.nav-right{
  margin-right: 5%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);  
}

.user{
  height: 40px;
  float: right;
  position: relative;
  top: 50%;
  transform: translateY(-40%); 
}

.more{
  float: right;
  margin-left: 20px;
  position: relative;
  top: 50%;
  transform: translateY(-60%);  
}

.avatar{

}

.search{
  position: absolute;
  right: 4%;
  width: 300px;
  top: 300px; 
  z-index: 2;
}


</style>