<template>
   <div>
    <h1>当前谱册页ID为:{{volumeId}}</h1>
   </div>
</template>

<script>

export default {
    data () {
        return {
            volumeId     
        }
    },
    components: {
    },
      created(){
      
       this.volumeId= this.$route.params.volumeId;
   }
}
</script>

<style scoped>


</style>