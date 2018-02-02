<template>
  
  <Layout class="container">

        <!-- <v-header></v-header> -->
        <v-banner></v-banner>
        <Content class="main">
          <transition name="fade">
            <router-view></router-view>
          </transition>
               
        </Content>

        <Footer class="footer">
        <h1 class="footertitle">哔谱哔谱</h1>
        <h2 class="footerinfo1">Copyright © 2018 哔谱哔谱 bipubipu.com | ICP备XXX号</h2>
        <h2 class="footerinfo2"> 2018 Made with <Icon type="heart"></Icon> by Justice_Eternal</h2>
        <a class="share1" href="https://github.com/zytx121/je" target="_blank">
          <Icon type="social-github" color="white" size="24"></Icon>
        </a>
        <a class="share2" href="https://tieba.baidu.com/f?kw=justice_eternal" target="_blank">
          <img class="tieba" src="@/assets/tieba.png" >
        </a>
        <a class="share3" href="https://jq.qq.com/?_wv=1027&k=53pXIys" target="_blank">
          <img class="je" src="@/assets/je.png" >
        </a>
        </Footer>
        <BackTop></BackTop>
  </Layout>

</template>
<script>
import vBanner from '@/components/login/login.vue'
import vHeader from '@/components/login/LoginHeader.vue'
export default {
  data() {
    return {};
  },
  components: {
    vHeader,
    vBanner,
  },
  methods: {

    
  }
};
</script>
<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}


.main {
  background-color: #fff;
  padding-top:100px;
  float: right;
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

.share1{
  float: right;
  position: relative;
  right: 100px;
  bottom: 30px;
}

.share2{
  float: right;
  position: relative;
  right: 120px;
  bottom: 30px;
}

.tieba{
  height: 24px;
}

.share3{
  float: right;
  position: relative;
  right: 140px;
  bottom: 30px;
}

.je{
  height: 24px;
  border-radius:5px;
}


</style>
