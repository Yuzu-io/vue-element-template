const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('base', resolve('src/base'))
      .set('views', resolve('src/views'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('layout', resolve('src/layout'))
      .set('svgIcon', resolve('src/svgIcon'))

    // svg icon配置
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
}
