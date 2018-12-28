<template>
  <div class="container">

    <div class="list-container">

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

      <form method="POST" action="/upload" enctype="multipart/form-data">
        <input name="file" type="file" />
        <button type="submit">上传配图</button>
        </form>
      <h2 style="color:red">请最先执行上传配图操作,因为会跳转下页面,之前填的东西会清空</h2>
      <i-form
        :model="MusicScore"
        label-position="left"
        :label-width="100"
      >
        <Form-item label="配图">
          <i-input v-model="MusicScore.imageUrl"></i-input>
          <em>配图的url。</em>
        </Form-item>
        <Form-item label="曲名">
          <i-input v-model="MusicScore.name"></i-input>
          <em>曲名统一必须是规范的原名。</em>
        </Form-item>
        <Form-item label="别名">
          <i-input v-model="MusicScore.alias"></i-input>
          <em></em>
        </Form-item>
        <Form-item label="专辑">
          <i-input v-model="MusicScore.anime"></i-input>
          <em>各专辑间用 / 区分,标签参照群内标签库,如果未找到想要的,添加后记得在标签库内也添加</em>
        </Form-item>
        <Form-item label="标签">
          <i-input v-model="MusicScore.tags"></i-input>
          <em>各标签间用 / 区分,标签参照群内标签库,如果未找到想要的,添加后记得在标签库内也添加</em>
        </Form-item>
        <Form-item label="扒谱者">
          <i-input v-model="MusicScore.provider"></i-input>
          <em></em>
        </Form-item>
        <Form-item label="扒谱者个人链接">
          <i-input v-model="MusicScore.provider_url"></i-input>
          <em></em>
        </Form-item>
        <Form-item label="整理者">
          <i-input v-model="MusicScore.carrier"></i-input>
          <em>填写自己用户名,成站后也要用</em>
        </Form-item>
        <Form-item label="相关演奏B站av号">
          <i-input v-model="MusicScore.performs"></i-input>
          <em>各作品间用 / 区分,统统格式为 av10493 (av小写)</em>
        </Form-item>
        <Form-item label="原曲网易云id">
          <i-input v-model="MusicScore.songs"></i-input>
          <em>各作品间用 / 区分</em>
        </Form-item>
        <Form-item label="其他描述">
          <i-input
            v-model="MusicScore.description"
            type="textarea"
            :rows="3"
          ></i-input>
          <em>投稿者提供的描述信息，可以添加歌词等，支持HTML常用的标签。</em>
        </Form-item>
        <Form-item label="曲谱正文">
          <!-- <quill-editor
            ref="myTextEditor"
            v-model="MusicScore.score_text"
            :options="editorOption"
          >
          </quill-editor> -->
                <i-input
            v-model="MusicScore.score_text"
            type="textarea"
            :rows="10"
            style="white-space:pre"
          ></i-input>
        </Form-item>

      </i-form>
      <Button style="margin: 30px 0px;" @click="sucess">
        生成JSON
      </Button>
    </div>

  </div>

</template>

<script>
import store from "@/vuex/index.js"; // 权限表

export default {
  data() {
    return {
      keyword: "",
      totalNum: 0,
      currentPage: 1,
      pageSize: 30,
      issues: [],
      switch1: false,
      img:'',
      scoreimg:'',
      data:'图片信息:',
      editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ],
            syntax: {
              highlight: text => hljs.highlightAuto(text).value
            },
          }},
      MusicScore: {
        //自动
        /*int Id;*/ //先不要id字段，导入的时候自动生成
        //创建日期 默认：当前时间
        //更新日期 默认：当前时间
        //表单
        name: '', //曲名。曲名统一必须是规范的原名。模糊搜索、错别字矫正的话交给具体的网站去维护，这里不存储。
        alias: '', //别名。
        anime:'',
        tags: '', //专辑，用规范的动漫名、电影名、游戏名等，有序，显示在标题最前。
        image_url: '', //配图的url。
        description: '', //投稿者提供的描述信息，可以添加歌词等，支持HTML常用的标签。
        /*
         [melodies]操作符 表示高音，可累加使用
         (melodies)操作符 表示低音，可累加使用
         否则表示中音。
         高级用法：（待定）
         <melodies>tr 表示震音
         <melodies>-- 表示延音
         用"//"或"/* * /"表示注释，以防止后期格式化的时候误伤注释文本。
         示例：
            //前奏[0:00-0:13]
            1 4 5  1 4 5  #5 4 5 #2 4 
            1 #2 #3  (#6) #2 #3  (#5 4 5 #2 4) 
            //中间钢琴部分略过
            //主旋律[0:27-0:51]
            7 #1  #2 #5 #6  #2 #5 #6  7 #5 #6 #4 #5 
            #2 #4 #5  #1 #4 #5  (7 #5 #6 #4 #5) 
            ...
        */
        score_text: '', //曲谱正文。

        //来源信息

        provider: '', //扒谱者  默认：空
        provider_url:'',//扒谱者个人链接  默认：空

        carrier: '', //整理者
        // CarrierUrl;//整理者个人链接

        //暂时只用这两个站。反之以后增加也方便的。
        performs: '', //相关演奏B站av号
        songs: '' //原曲网易云id

        //标签的话交给具体的网站去维护，这里不存储。
      }
    }
  },
  methods: {
          getFile(event) {
        this.img = event.target.files[0];
        console.log(this.file);
      },
        submitForm(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append('file', this.img);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        this.$http.post('/upload', formData, config).then(function (res) {
          this.data=res.data;
        })
      },
  sucess :function() {
    // 创建隐藏的可下载链接
    var eleLink = document.createElement('a');
    eleLink.download = this.MusicScore.carrier+' - '+this.MusicScore.name+'.json';
    console.log(this.MusicScore.Carrier+this.MusicScore.Name+'.json')
    let data = ''
    data = JSON.parse(JSON.stringify(this.MusicScore))
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    data.alias = this.MusicScore.alias.length ? this.MusicScore.alias.split('/'):[]
    console.log( 'ssss'+this.MusicScore.alias.length )
        // data.alias = this.MusicScore.alias.length && this.MusicScore.alias.split('/')
     data.performs = this.MusicScore.performs.length ?this.MusicScore.performs.split('/'):[]
     data.songs = this.MusicScore.songs.length ?this.MusicScore.songs.split('/'):[]
      data.tags = this.MusicScore.tags.length ?this.MusicScore.tags.split('/'):[]
       data.anime = this.MusicScore.anime.length ?this.MusicScore.anime.split('/'):[]
    var blob = new Blob([JSON.stringify(data)]);
        console.log(blob)
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
}
  }
}
</script>

<style scoped>
.container {
  width: 960px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  background-color: #fff;
  margin-top: -30px;
}

.list-container {
  width: 80%;
  margin-top: -30px;
}

.score-list {
  margin: 10px 0;
  height: 80px;
  padding-left: 30px;
  line-height: 50px;
  font-size: 24px;
  cursor: pointer;
}

.list-font {
  display: inline-block;
  font-size: 24px;
  color: #111;
}

.list-name {
  font-size: 20px;
  color: #495060;
  margin-left: 45px;
  margin-bottom: 20px;
  color: hsl(210, 13%, 30%);
  text-shadow: 0 1px 1px rgba(184, 213, 232, 0.8);
}

.list-name-r {
  float: right;
  margin-right: 30px;
}

.list-avatar {
  float: right;
  margin-right: 20px;
  margin-bottom: 20px;
}

.pagination {
  margin-top: 50px;
  margin-left: 30%;
  margin-bottom: 50px;
}

.search {
  margin-bottom: 40px;
  color: #888;
  font-size: 11px;
}

.slogan {
  font-size: 16px;
  text-align: center;
}

.logo1 {
  height: 300px;
}

.select {
  float: left;
  display: inline;
  margin-right: 8px;
}
</style>
