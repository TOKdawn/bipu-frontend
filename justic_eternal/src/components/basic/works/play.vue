<template>
  <div class="wrapper1">
    <video controls="controls" :src="list.src" :poster="list.pic" class="video"></video>                 
  </div>

</template>

<script>


export default {

  data() {
      return {
        "recommondList1": [
                          {
                          
                              "id": 1000001,
                              "typename": "排骨大大",
                              "title": "八度和音入门与浅谈",
                              "author": "sqrsqr32",
                              "description": "",
                              "pic": "http://upload-images.jianshu.io/upload_images/2141706-864e45115c886b37.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                              "src": "http://otr48sjv5.bkt.clouddn.com/%E5%85%AB%E5%BA%A6%E5%92%8C%E9%9F%B3%E5%85%A5%E9%97%A8%E4%B8%8E%E6%B5%85%E8%B0%88.mp4"
                          },
                          {
                          
                              "id": 1000002,
                              "typename": "排骨大大",
                              "title": "颤音，震音",
                              "author": "sqrsqr32",
                              "description": "",
                              "pic": "http://upload-images.jianshu.io/upload_images/2141706-b829195f5ccbf574.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                              "src": "http://otr48sjv5.bkt.clouddn.com/%E9%A2%A4%E9%9F%B3%EF%BC%8C%E9%9C%87%E9%9F%B3.mp4"
                          },
                          {
                          
                              "id": 1000003,
                              "typename": "排骨大大",
                              "title": "断奏",
                              "author": "sqrsqr32",
                              "description": "",
                              "pic": "http://upload-images.jianshu.io/upload_images/2141706-693930646f308805.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                              "src": "http://otr48sjv5.bkt.clouddn.com/%E6%96%AD%E5%A5%8F.mp4"
                          },
                          {
                          
                              "id": 1000004,
                              "typename": "排骨大大",
                              "title": "花舌",
                              "author": "sqrsqr32",
                              "description": "",
                              "pic": "http://upload-images.jianshu.io/upload_images/2141706-de120b8f12fdec7e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                              "src": "http://otr48sjv5.bkt.clouddn.com/%E8%8A%B1%E8%88%8C.mp4"
                          },
                          {
                          
                              "id": 1000005,
                              "typename": "排骨大大",
                              "title": "快速演奏入门和概述",
                              "author": "sqrsqr32",
                              "description": "",
                              "pic": "http://upload-images.jianshu.io/upload_images/2141706-abfad72355b9cd53.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                              "src": "http://otr48sjv5.bkt.clouddn.com/%E5%BF%AB%E9%80%9F%E6%BC%94%E5%A5%8F%E5%85%A5%E9%97%A8%E5%92%8C%E6%A6%82%E8%BF%B0.mp4"
                          },
                          {
                          
                              "id": 1000006,
                              "typename": "排骨大大",
                              "title": "移琴，推键",
                              "author": "sqrsqr32",
                              "description": "",
                              "pic": "http://upload-images.jianshu.io/upload_images/2141706-b9b5c98e412b388c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                              "src": "http://otr48sjv5.bkt.clouddn.com/%E7%A7%BB%E7%90%B4%EF%BC%8C%E6%8E%A8%E9%94%AE.mp4"
                          }
                          
                  ]   
      }
  },
  computed: {
    recommondList() {
        return this.$store.state.video.recommondList1
    },
    list() {
        var recommondList1 = this.$store.state.video.recommondList1
        for(var index = 0; index < recommondList1.length; index++){
            if(recommondList1[index].id == this.$route.params.videoId) {
                return recommondList1[index]
            }
        }  
    },   
  },
  mounted() {

  },
  created() {
      this.$store.state.video.recommondList1 = this.recommondList1
  },
  methods: {

  }
}
</script>

<style scoped>

.wrapper1{
  width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
}

.video{
  width: 100%;
}

</style>
