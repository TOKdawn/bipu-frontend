<template>
  <div class="header">
    <div class="header1">
        <img class="logo" @click="$_router" src="@/assets/logo.png" >
        <div class="bipu" @click="$_router">bipubipu</div>
        <div class="user">
            <Avatar icon="person" class="avatar" src="//avatars2.githubusercontent.com/u/15122564?s=460&v=4"/>
            <Icon type="more" color="white" size="20" class="more"></Icon>
        </div>
    </div>
        <Header class="subHeader">
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
          <Input class="search" >
              <Button slot="append" icon="ios-search"></Button>
          </Input>
        </Header>
    </div>
</template>

<script>
export default {
    computed: {

    },
    methods: {

      $_router: function(routerGo) {
        switch (routerGo) {
          case 0:
           this.$router.push("/basic/home");
            break;
          case 1:
          let id= '0000000001'
           this.$router.push({ name: "score", params: { scoreId: id} });
            break;
          case 2:
            this.$router.push("/basic/translator");
            break;
          case 3:
          let voleme='6666666666'
             this.$router.push({ name: "volume", params: { volumeId: voleme} });
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
    }
  }  

};
</script>

<style scoped>

.header {
  height: 100px;
}

.subHeader {
  height: 60px;
  background-color: #fff;
  width: 100%;

}

.menu{
  width: 100%;
  float: left;
  z-index: 1;
}

.search{
  position: absolute;
  right: 4%;
  width: 15%;
  top: 55px;
  float: right;
  z-index: 2;
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
  transform: translateY(-60%);    
}

.avatar{
  position: relative;
  top: 50%;
  transform: translateY(-50%);     
}
</style>