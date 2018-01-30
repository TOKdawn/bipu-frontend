<template>
  
  <Layout class="container">
        <div class="header">
        <v-header></v-header>
        <Header class="subHeader">
          <Menu mode="horizontal"  active-name="1">
          <MenuItem name="1" @click.native="$_router(1)">
              <Icon type="search"></Icon>
              搜索
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
        </Header>
        </div>
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
import vHeader from '@/components/login/LoginHeader.vue'
export default {
  data() {
    return {};
  },
  components: {
    vHeader,
  },
  methods: {
    $_router: function(routerGo) {
      switch (routerGo) {
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

.header {
  height: 100px;
}

.subHeader {
  height: 60px;
  background-color: #fff;
  flex-direction: column;
  width: 100%;
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
