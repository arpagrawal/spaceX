module.exports = {
    devServer: {
      host: 'localhost'
    },
    chainWebpack: (config) => config.optimization.minimize(false),
    css: {
      loaderOptions: {
        less: {
          prependData: "@import '~@/styles/styles.less';",
        },
      },
    },
  };