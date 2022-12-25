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
      '^/api': {
        target: 'http://localhost:8001/api/v1',
        ws: true,
        changeOrigin: true
      }
    }
  }
}