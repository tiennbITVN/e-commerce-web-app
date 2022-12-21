module.exports = {
  assetsDir: '@/assets/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'BMSys'
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
  }
}