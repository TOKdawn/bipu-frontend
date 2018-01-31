<template>
  <div class="comment">
    <div class="comment-title">
      <div @click="openGitHub()">
        <img :src="comment.user.avatar_url">
        <span>{{comment.user.login}}</span>
      </div>
    </div>
    <article class="markdown-body" v-html="renderedMarkdown"/>
  </div>
</template>
<style lang="scss" scoped>
  .comment {
    margin-top: 10px;
    border-radius: 4px;
    border: solid 1px #fff;
    width: 960px;
  }

  .comment-title {
    height: 48px;
    line-height: 48px;
    background-color: #f9fafc;
    border-bottom: solid 1px #fff;
    padding: 0px 30px;
    div {
      cursor: pointer;
      float: left;
      img {
        float: left;
        width: 30px;
        height: 30px;
        margin-top: 9px;
        border-radius: 15px;
        margin-right: 12px;
      }
      span {
        font-size: 14px;
        color: #4b595f;
      }
    }
  }

  .markdown-body {
    padding: 15px;
  }
</style>
<script>
  export default {
    data: function () {
      return {
        renderedMarkdown: ''
      }
    },
    props: ['comment'],
    methods: {
      renderMarkdown () {
        this.renderedMarkdown = ''
        if (this.comment.body) {
          this.renderedMarkdown = this.$marked(this.comment.body)
        }
      },
      openGitHub () {
        window.open(this.comment.user.html_url)
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.renderMarkdown()
      })
    }
  }
</script>
