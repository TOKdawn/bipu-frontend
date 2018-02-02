<template>
  <div class="container">
    <article class="markdown-body" v-html="renderedMarkdown"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        renderedMarkdown: ''
      }
    },
    methods: {
      getDownload () {
        this.$gitHubApi.getDownload(this).then(response => {
          if (response.data) {
            this.renderedMarkdown = this.$marked(response.data)
          }
        })
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.getDownload()
      })
    }
  }
</script>

<style  scoped>
  .container {
  width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  /*background-color: #666;*/
  }
</style>