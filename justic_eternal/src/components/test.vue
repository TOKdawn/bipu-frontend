<template>
 <Row>
    <Col span="12">    
         <form method="POST" action="/upload" enctype="multipart/form-data">
        <input name="file" type="file" />
        <button type="submit">Upload</button>
            </form>
        <Button type="info" @click="login">登录</Button>
        <Button type="success" @click="myinfo">获取我的信息</Button>
           <Input v-model="uid" type="textarea" :rows="1" placeholder="uid"></Input>
      <Button type="warning" @click="userinfo">某用户信息</Button>
          <br>
           <Input v-model="vname" type="textarea" :rows="1" placeholder="vname"></Input>
            <Input v-model="vdescribe" type="textarea" :rows="1" placeholder="vdescribe"></Input>
            <Input v-model="vurl" type="textarea" :rows="1" placeholder="vurl"></Input>
            <hr>
              <Input v-model="vid" type="textarea" :rows="1" placeholder="vid"></Input>
              <Input v-model="sid" type="textarea" :rows="1" placeholder="sid"></Input>
              
         <Button type="warning" @click="createvolume">创建谱册</Button>
          
            
         <Button type="success" @click="editvolume">编辑谱册</Button>
         <br>

         <Button type="warning" @click="addscore">添加一个谱子</Button>

         <Button type="success" @click="showvloume">展示所有谱册</Button>
  
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>
    </Col>
    <Col span="12">
         <Input v-model="text" type="textarea" :rows="10" placeholder="Enter something..."></Input>
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
      uid: ''
    };
  },
  methods: {
    login: function() {
        console.log('sssss')
      this.$http.get('/passport/github');
    },
    myinfo: function() {
      this.$http.get('/user').then((res)=>{
          this.text = res+' ';
      })
    },
     createvolume: function() {
      this.$http.post('/volume',{
          name: this.vname,
          describe: this.vdescribe
      }).then((res)=>{
          this.text = res+' ';
      })
    },
     editvolume: function() {
      this.$http.post(`/volume/${this.vid}`,{
           name: this.vname,
          describe: this.vdescribe,
          url: this.vurl
      }).then((res)=>{
          this.text = res+' ';
      })
    },

     addscore: function() {
      this.$http.post(`/volume/${this.vid}/score`,{
          offset: this.offset,
          pagesize: this.pagesize
      }).then((res)=>{
          this.text = res+' ';
      })
    },

    delescore: function(){
        this.$http.delete(`/volume/${this.vid}/score/${this.sid}`).then((res)=>{
          this.text = res+' ';
      })
    },
    userinfo: function(){
        this.$http.get(`/user/${this.uid}`).then((res)=>{
          this.text = res+' ';
      })
    },
    showvloume: function(){
        this.$http.get(`/volume`).then((res)=>{
          this.text = res+' ';
      })
    },
      showscore: function(){
          this.$http.get(`/volume/${this.vid}/score`).then((res)=>{
          this.text = res+' ';
      })
      }
    
  }
};
</script>

<style scoped>
</style>