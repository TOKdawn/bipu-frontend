<template>
   <div>
    <h1>暂未完工，敬请期待！</h1>
    <h2>当前谱册页ID为:{{volumeId}}</h2>
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