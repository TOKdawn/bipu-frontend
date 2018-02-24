<template>
  <div v-if="issue" class="container1">
    <Affix :offset-top="100" class ="favorite">
      <Button type="ghost" @click="modal = true" shape="circle" >收藏</Button>
      <Modal
          v-model="modal"
          title="添加到"
          @on-ok="ok"
          @on-cancel="cancel">
          <div slot="footer">
            <Button type="error" size="large" long  @click="cancel">取消</Button>
          </div>
          <Scroll >
<!--             <Card dis-hover v-for="(item, index) in list1" :key="index" style="margin: 32px 0">
              Content {{ item }}
            </Card> -->
            <Card dis-hover style="margin: 12px 3px">
              谱曲收藏夹
            </Card>
            <Card dis-hover style="margin: 12px 3px">
              谱曲收藏夹
            </Card>
            <Card dis-hover style="margin: 12px 3px">
              谱曲收藏夹
            </Card>
            <Card dis-hover style="margin: 12px 3px">
              谱曲收藏夹
            </Card>
            <Card dis-hover style="margin: 12px 3px">
              谱曲收藏夹
            </Card>
            <Card dis-hover style="margin: 12px 3px">
              谱曲收藏夹
            </Card>
            <Card dis-hover style="margin: 12px 3px">
              谱曲收藏夹
            </Card>
            <Card dis-hover style="margin: 12px 3px">
              谱曲收藏夹
            </Card>
          </Scroll>
      </Modal>
    </Affix>
    
    <div class="title-container">
      {{issue.title.trim()}}
    </div>

    <div class="comment-container">
      <Card>
        <comment :comment="issue"/>
      </Card>
      <Card class="comment-list">
        <comment v-for="comment in comments" :key="comment.id" :comment="comment"/>
      </Card>
    </div>



  </div>
</template>

<script>
import Comment from './Comment.vue'
export default {
    data () {
        return {
        issue:null,
        number:null,
        comments: [],
        modal: false  
        }
    },
    components: {
      Comment
    },
    methods: {
      ok () {
          this.$Message.info('Clicked ok');
      },
      cancel () {
          this.modal = false;
          this.$Message.info('emmm...我再想想呗~');
      },

      getComments () {
        if (this.issue && this.issue.comments > 0) {
          this.$gitHubApi.getComments(this, this.issue.comments_url).then(response => {
            this.comments = response.data

          })
        }
      },
      getIssue () {
        this.$gitHubApi.getIssue(this, this.number).then(response => {
          this.issue = response.data
          this.getComments()

        })
      },
      back () {
        this.$router.go(-1)
      },
      remark () {
        window.open(this.issue.html_url)
      }
    },
    created(){
      if (this.$route.params.issue) {
        this.issue = this.$route.params.issue
      } else {
        if (this.$route.params.scoreId) {
          this.number = this.$route.params.scoreId
        } else {
          this.$router.replace('/')
        }
      }
    },
    mounted: function () {        
      this.$nextTick(function () {
        if (this.issue) {
          this.getComments()
        } else {
          this.getIssue()
        }
      })
    }
}
</script>

<style scoped>

.container1{
  width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

}

.title-container{
  margin-bottom: 40px;
  margin-top: -30px;
  font-size: 36px;
  text-align: center;
    /* background: hsl(210, 13%, 60%); */
        color: hsl(210, 13%, 30%);
        text-shadow: 0 1px 1px #e0ae62;
    
}

.comment-container{
  margin-top: -30px;
}

.comment-list{
  margin-top: 20px;
}

.favorite{
  float: right;
  margin-top: 100px;
  margin-right: 20px;
  z-index: 3;
}

</style>