let EntryOptionPlugin = require('./plugins/EntryOptionPlugin');
class WebpackOptionsApply {
  process(options, compiler) {
    // // 自身注册一个处理entry的插件
    new EntryOptionPlugin().apply(compiler);
    // compiler.hooks.entryOption.call(options.context, options.entry);
  }
}
module.exports = WebpackOptionsApply;