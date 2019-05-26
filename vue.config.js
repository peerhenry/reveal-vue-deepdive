const path = require('path')

module.exports = {
  configureWebpack: {
    externals: {
      reveal: 'Reveal',
    },
    resolve: {
      alias: {
        '@pics': path.resolve(__dirname, 'src/assets/pics'),
      },
    },
  },
}
