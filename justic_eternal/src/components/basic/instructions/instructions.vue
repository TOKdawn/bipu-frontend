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
      getInstruction () {
        this.$gitHubApi.getInstruction(this).then(response => {
          if (response.data) {
            this.renderedMarkdown = this.$marked(response.data)
          }
        })
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.getInstruction()
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