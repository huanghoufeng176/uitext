<template>
  <div class="">
    <el-button @click="tuichuClick" type="info">退出</el-button>
  </div>
</template>

<script>
export default {
  components:{},
  data(){
    return {
    }
  },
  created(){},
  mounted(){},
  watch:{},
  computed:{},
  methods:{
    //点击退出按钮
    tuichuClick(){
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  },
}
</script>
<style scoped>
</style>