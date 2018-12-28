<template>

 <Row>
    <Col span="12">    
         <form method="POST" action="/upload" enctype="multipart/form-data">
        <input name="file" type="file" />
        <button type="submit">Upload</button>
        </form>
        <Button type="info" @click="login">登录</Button>
        <Button type="success" @click="myinfo">获取我的信息</Button>
         <Button type="success" @click="logout">注销</Button>
           <Input v-model="uid" type="textarea" :rows="1" placeholder="uid"></Input>
      <Button type="warning" @click="userinfo">某用户信息</Button>
          <br>
           <Input v-model="vname" type="textarea" :rows="1" placeholder="vname"></Input>
           <br>
            <Input v-model="vdescribe" type="textarea" :rows="1" placeholder="vdescribe"></Input>
             <br>
            <Input v-model="vurl" type="textarea" :rows="1" placeholder="vurl"></Input>
            <hr>
              <Input v-model="vid" type="textarea" :rows="1" placeholder="vid"></Input>
               <br>
              <Input v-model="sid" type="textarea" :rows="1" placeholder="sid"></Input>
                 <Input v-model="comment" type="textarea" :rows="1" placeholder="comment"></Input>
                 <Input v-model="cid" type="textarea" :rows="1" placeholder="cid"></Input>
                 
         <Button type="warning" @click="createvolume">创建谱册</Button>
           <br>
            
         <Button type="success" @click="editvolume">编辑谱册</Button>
         <br>

         <Button type="warning" @click="addscore">添加一个谱子</Button>
          <Button type="warning" @click="delescore">删除一个谱子</Button>
               <Button type="warning" @click="showscore">展示谱册内所有谱子</Button>
 <br>
         <Button type="success" @click="showvloume">展示所有谱册</Button>
   <br>
        <Button type="success" @click="showUserVloume">查看某用户谱册信息</Button>
         <br>
        <Button type="warning" @click="showMyVloume">查看自己的谱册信息</Button>
        <br>
        <Button type="error" @click="collectionVloume" >收藏一个谱册</Button>
<br>
 <Button type="error" @click="addComment" >添加评论</Button>
 <br>
 <Button type="error" @click="deleteComment" >删除父级评论</Button>
 <br>
 <Button type="error" @click="deletesubComment" >删除子级评论</Button>
 <br>
 <Button type="error" @click="showComment" >查看评论</Button>
    </Col>
    <Col span="12">
         <Input v-model="text" type="textarea" :rows="10" placeholder="Enter something..."></Input>
      {{text}}
    </Col>
</Row>
 

</template>


<script>
export default {
  data() {
    return {
      uid: '',
      text: '',
      vname: '',
      vdescribe:'',
      vurl: '',
      vid: '',
      sid: '',
      offset: '',
      pagesize: '',
      uid: '',
      comment: '',
      cid: '',
    };
  },
  methods: {
    login: function() {
        console.log('sssss')
      window.location.href='/passport/github'
      
    },
    myinfo: function() {
      this.$http.get('/user').then((res)=>{
          console.log(res.data)
          this.text = res.data;
      })
    },
     createvolume: function() {
      this.$http.post('/volume',{
          title: this.vname,
          describe: this.vdescribe
      }).then((res)=>{
           console.log(res.data)
             this.text =  JSON.stringify(res.data);
      })
    },
     editvolume: function() {
      this.$http.post(`/volume/${this.vid}`,{
           title: this.vname,
          describe: this.vdescribe,
          url: this.vurl
      }).then((res)=>{
           console.log(res.data)
            this.text =  JSON.stringify(res.data);
      })
    },

     addscore: function() {
      this.$http.post(`/volume/${this.vid}/score`,{
          offset: this.offset,
          pagesize: this.pagesize,
          sid: this.sid
      }).then((res)=>{
           console.log(res.data)
            this.text = JSON.stringify(res.data);
      })
    },

    delescore: function(){
        this.$http.delete(`/volume/${this.vid}/score/${this.sid}`).then((res)=>{
             console.log(res.data)
             this.text =  JSON.stringify(res.data);
      })
    },
    userinfo: function(){
        this.$http.get(`/user/${this.uid}`).then((res)=>{
             console.log(res.data)
          this.text = JSON.stringify(res.data);
      })
    },
    showvloume: function(){
        this.$http.get(`/volume`).then((res)=>{
             console.log(res.data)
           this.text =  JSON.stringify(res.data);
      })
    },
      showscore: function(){
          this.$http.get(`/volume/${this.vid}/score`).then((res)=>{
               console.log(res.data)
             this.text =  JSON.stringify(res.data);
      })
      },
      showUserVloume: function(){
           this.$http.get(`/user/collection/${this.uid}?offset=1&pagesize=5`).then((res)=>{
             console.log(res.data)
          this.text = JSON.stringify(res.data);
      })
      },
      showMyVloume: function(){
        this.$http.get(`/user/collection/?offset=1&pagesize=5`).then((res)=>{
             console.log(res.data)
          this.text = JSON.stringify(res.data);
      })
      },
      collectionVloume: function(){
                this.$http.post(`/user/collection`,{
                vid : this.vid
            }).then((res)=>{
                console.log(res.data)
                  this.text = JSON.stringify(res.data);
            })
      },
      deleteVloume: function(){
         this.$http.delete(`/user/collection/${this.vid}`).then((res)=>{
               console.log(res.data)
          this.text = JSON.stringify(res.data);
         })
      },
       deleteScore: function(){
         this.$http.delete(`/volume/${this.vid}/score/${this.sid}`).then((res)=>{
             console.log(res.data)
          this.text = JSON.stringify(res.data);
         })
      },
   addComment: function(){
            this.$http.post(`/volume/${this.vid}/comment`,{
                text : this.comment
            }).then((res)=>{
                console.log(res.data)
                  this.text = JSON.stringify(res.data);
            })
      }, 
        deleteComment: function(){
         this.$http.delete(`/comment/${this.cid}`).then((res)=>{
             console.log(res.data)
          this.text = JSON.stringify(res.data);
         })
      },  deletesubComment: function(){
         this.$http.delete(`/subcomment/${this.cid}`).then((res)=>{
             console.log(res.data)
          this.text = JSON.stringify(res.data);
         })
      },  
       showComment: function(){
         this.$http.get(`/volume/${this.vid}/comment`).then((res)=>{
             console.log(res.data)
          this.text = JSON.stringify(res.data);
         })
      },
      logout: function(){
          this.$http.get(`/user/logout`).then((res)=>{
             console.log(res.data)
          this.text = JSON.stringify(res.data);
         })
      }

    
  }
};
</script>

<style scoped>
</style>