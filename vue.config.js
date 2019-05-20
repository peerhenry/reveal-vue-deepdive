const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@pics': path.resolve(__dirname, 'src/assets/pics'),
      },
    },
  },
}
