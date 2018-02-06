<template>
  <div class="container">
    
    <div class="list-container">

      <Input class="search" v-model="keyword" placeholder="说你又想要什么奇怪的谱子 - -！" @on-enter="searchIssues()" >
          <Button slot="append" icon="ios-search" @click="searchIssues()" ></Button>
      </Input>

      <div class="list-name" v-if="totalNum">
        <span>谱曲名称</span>      
        <span class="list-name-r">上传者</span>
      </div>



      <Card class="score-list" v-for="issue in issues" :key="issue.id" v-if="totalNum">
        <router-link :to="{name:'score', params: {scoreId: issue.number, issue: issue}}">
          <h2 class="list-font">{{issue.title.trim().substring(0, 25)}}</h2>
        </router-link>
        <Avatar icon="person" class="list-avatar" size="large" :src="issue.user.avatar_url"  />
      </Card>



<!--       <Card class="score-list">
        Fly Me to The Moon
        <Avatar icon="person" class="list-avatar" size="large" src="//avatars2.githubusercontent.com/u/15122564?s=460&v=4"/>
      </Card>   
      <Card class="score-list">
        Fly Me to The Moon
      </Card>
      <Card class="score-list">
        Fly Me to The Moon
      </Card>   
      <Card class="score-list">
        Fly Me to The Moon
      </Card>
      <Card class="score-list">
        Fly Me to The Moon
      </Card>   
      <Card class="score-list">
        Fly Me to The Moon
      </Card>
      <Card class="score-list">
        Fly Me to The Moon
      </Card>   
      <Card class="score-list">
        Fly Me to The Moon Fly Me to The Moon Fly Me to The 
        <Avatar icon="person" class="list-avatar" size="large" src="//avatars2.githubusercontent.com/u/15122564?s=460&v=4"/>
      </Card>  -->
      <div class="slogan" v-if="!totalNum" >

        <a class="share2" href="https://github.com/zytx121/je/issues" target="_blank">
          <img class="logo1" src="@/assets/logo.png" >
        </a>
        <h1>肥肠抱歉，您要找的谱子暂时还没入库 - -！</h1>
      </div>

      <div class="pagination" v-if="totalNum">
        <!-- <v-pagination></v-pagination> -->
            <Page :total="totalNum" :current="currentPage" :page-size="pageSize"  show-total placement="top" @on-change="handleCurrentPageChanged" ></Page>  
      </div>
    </div>

  </div>
     
</template>

<script>
import store from "@/vuex/index.js"; // 权限表 

export default {
    data () {
      return {
        keyword: '',
        totalNum: 0,
        currentPage: 1,
        pageSize: 30,
        issues: [],
      }
    },
    // watch: {
    //   '$route' (to, from) {
    //     // 对路由变化作出响应...
    //     this.keyword = this.$route.params.keyword
    //     this.searchIssues()
    //   }
    // },

    components: {
    },

    methods: {
      searchIssues () {
        this.currentPage = 1
        this.getIssues()
      },
      handleCurrentPageChanged (val) {
        this.currentPage = val
        this.getIssues()
        this.$Loading.start()
      },
      getIssues () {
        this.$gitHubApi.getIssues(this, {
          keyword: this.keyword,
          currentPage: this.currentPage,
          
        }).then(response => {
          this.totalNum = response.data.total_count
          this.issues = response.data.items
          this.$Loading.finish()
        })
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.getIssues()
      })
    },
    created(){
      // console.log(this.$route.params.keyword)
      if (this.$route.params.keyword) {
        this.keyword = this.$route.params.keyword
      } else {
          this.keyword = " "
      }
    }
}
</script>

<style scoped>

.container{
  width: 960px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  background-color: #fff;
  margin-top: -30px;
  
}

.list-container{
  width: 80%;
  margin-top: -30px;
  
}

.score-list{
  margin: 10px 0;
  height: 80px;
  padding-left: 30px; 
  line-height: 50px; 
  font-size: 24px;
  cursor:pointer;
}

.list-font{
  display: inline-block;
  font-size: 24px;
  color: #111;
}


.list-name{
  font-size: 18px;
  color: #495060;
  margin-left: 45px;
  margin-bottom: 20px;
}

.list-name-r{
  float: right;
  margin-right: 30px; 
}

.list-avatar{
  float: right;
  margin-right: 20px; 
  margin-bottom: 20px;

}

.pagination{
  margin-top: 50px;
  margin-left: 30%;
  margin-bottom: 50px;
}

.search{
  margin-bottom: 40px;
}

.slogan{
  font-size: 16px;
  text-align: center;
}

.logo1{
  height: 300px;
}


</style>
