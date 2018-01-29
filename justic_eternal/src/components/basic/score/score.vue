<template>
   <div>
    <h1>谱子ID为:{{scoredId}}</h1>
   </div>
</template>

<script>

export default {
    data () {
        return {
            scoredId     
        }
    },
    components: {
    },
     created(){
      
       this.scoredId= this.$route.params.scoreId;
   }
}
</script>

<style scoped>


</style>