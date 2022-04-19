const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer:{
    //（方法一）
    // proxy:'http://www.baidu.com'

    //(方法二)

      proxy:{
        '/api1':{
        target:'http://www.baidu.com',
          pathRewrite:{'^/api1':''},
          changeOrigin: true, 
        },

      }
  }
})