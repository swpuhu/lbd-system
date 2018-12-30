const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/a',
  {
    target: 'http://dev.admin.carrots.ptteng.com/',
    changeOrigin: true
  }));
}
