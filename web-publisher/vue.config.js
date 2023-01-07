module.exports = {
  assetsDir: '@/assets/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'E-Commerce'
    },
    login: {
      entry: 'src/login.js',
      template: 'public/login.html',
      filename: 'login.html',
      title: 'Login'
    },
    register: {
      entry: 'src/register.js',
      template: 'public/register.html',
      filename: 'register.html',
      title: 'Register User'
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8001/api',
        ws: true,
        changeOrigin: true
      // },
      // '^/routes': {
      //   target: 'http://localhost:8001/routes',
      //   ws: true,
      //   changeOrigin: true
      // },
      // '^/services': {
      //   target: 'http://localhost:8001/services',
      //   ws: true,
      //   changeOrigin: true
      }
    }
  },
  // css: {
  //   loaderOptions: {
  //     css: {
  //       additionalData: `@import "@/assets/style.global.css"`
  //     }
  //   }
  // }
}