module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
        'network':'@/network',
      }
    }
  }
}

//列子  再引入的时候
//import tabbar from 'components/dsdfd.vue'