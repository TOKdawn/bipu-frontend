<template>
  
 

   <Layout class="container">
        <div class="header1">
          <Icon class="github"  type="social-github" color="white" size="30" ></Icon>
              <div @click="$_router(0)">bipupu</div>
        </div>
        <Header class="header2">
          <Menu mode="horizontal"  active-name="1">
          <MenuItem name="1" >
              <Icon type="search"></Icon>
                   <div @click="$_router(1)">搜索</div>
          </MenuItem>
          <MenuItem name="2" >
              <Icon type="shuffle"></Icon>
             
              <div @click="$_router(2)">转谱器</div>
          </MenuItem>
          <Submenu name="3">
              <template slot="title" @click="$_router(3)">
                  <Icon type="ios-bookmarks"></Icon>
                  谱册
              </template>
                <MenuItem name="3-1">
                <Icon type="ios-flame-outline"></Icon>
                热门
                </MenuItem>
                <MenuItem name="3-2">
                <Icon type="ios-clock-outline"></Icon>
                最新
                </MenuItem>
          </Submenu>
          <MenuItem name="4" @click="$_router(4)">
              <Icon type="ios-musical-notes"></Icon>
              佳作
          </MenuItem>
          <MenuItem name="5">
              <Icon type="android-arrow-down" @click="$_router(5)"></Icon>
              APP下载
          </MenuItem>
          <MenuItem name="6" @click="$_router(6)">
              <Icon type="information"></Icon>
              使用说明
          </MenuItem>
          </Menu>
        </Header>
        <Content class="main">
               <router-view></router-view>
        </Content>
        <Footer class="footer">
        <h1 class="footertitle">哔谱哔谱</h1>
        <h2 class="footerinfo1">Copyright © 2018 哔谱哔谱 bipubipu.com | ICP备XXX号</h2>
        <h2 class="footerinfo2"> 2018 Made with <Icon type="heart"></Icon> by Justice_Eternal</h2>
        </Footer>
    </Layout>
</template>
<script>
export default {
  data() {
    return {};
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
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.header1 {
  height: 40px;
  background-color: #666;
  margin-left: 1px;
  color: white;
  font-size: 18px;
}

.github {
  margin-left: 40px;
}

.header2 {
  height: 60px;
  background-color: #fff;
  flex-direction: column;
}

.main {
  background-color: #fff;
  padding-top:100px;
}

.footer {
  text-align: center;
  height: 100px;
  background-color: #434343;
}

.footertitle {
  font-size: 18px;
  font-weight: lighter;
  color: white;
  letter-spacing: 2px;
  /*  margin-bottom：2px;*/
}

.footerinfo1 {
  font-size: 11px;
  font-weight: lighter;
  color: white;
}

.footerinfo2 {
  font-size: 11px;
  font-weight: lighter;
  color: white;
}
</style>
