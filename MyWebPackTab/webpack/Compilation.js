const {
  Tapable,
  SyncHook,
  AsyncParallelHook,
  AsyncSeriesHook
} = require("tapable");
class Compilation extends Tapable {
  constructor(compiler) {
    super();
    this.hooks = {
      seal: new SyncHook([]),

      beforeChunks: new SyncHook([]),
      afterChunks: new SyncHook([])
    };
  }
  addEntry(context, entry, name, finallyCallback) {
    // this.hooks.addEntry.call(entry,name);//./src/index.js main
    // this._addModuleChain(context,entry,name);
    // finallyCallback();
  }
  seal() {
    this.hooks.seal.call()
    this.hooks.beforeChunks.call();

    this.hooks.afterChunks.call();

    console.log("开始封装")
    // this.createChunkAssets()
  }
  createChunkAssets() {

  }
}
module.exports = Compilation;