const path = require('path')

module.exports = {
  configureWebpack: {
    externals: {
      reveal: 'Reveal',
    },
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@pics': path.resolve(__dirname, 'src/assets/pics'),
      },
    },
  },
}
