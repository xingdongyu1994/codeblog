let Compiler = require('./Compiler');
let WebpackOptionsApply = require('./WebpackOptionsApply');

function webpack(options) {

  options.context = process.cwd(); //当前目录
  // 1.  new Compiler()
  let compiler = new Compiler(options.context)
  compiler.options = options;


  // 2.  加载自定义的插件
  if (options.plugins && Array.isArray()) {
    options.plugins.forEach(plugin => {
      plugin.apply(compiler)
    })
  }

  // 3. 加载内置插件
  new WebpackOptionsApply().process(options, compiler);
  return compiler

}

module.exports = webpack;