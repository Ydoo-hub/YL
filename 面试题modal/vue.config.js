// vue.config.js
const fs = require('fs');

module.exports = {
  devServer: {
    setup: (app, server) => {
      app.all('/api/*', (req, res) => {
        let s = fs.createReadStream(__dirname + req.url.split('?').shift());
        s.pipe(res.type('json'));
        s.on('error', (err) => {
          res.type('html').status(404).end('Error: ' + err);
        });
      });
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'EternityX Example Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
};