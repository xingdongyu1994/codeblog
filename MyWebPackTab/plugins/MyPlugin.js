class MyPlugin {
  apply(compiler) {
    compiler.hooks.environment.tap('MyPlugin', () => {
      console.log('我是插件')
    });
  }
}
module.exports = MyPlugin;