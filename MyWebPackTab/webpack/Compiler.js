const {
  Tapable,
  SyncHook,
  AsyncParallelHook,
  AsyncSeriesHook
} = require("tapable");

const Compilation = require("./Compilation");


class Compiler extends Tapable {
  constructor(context) {
    super();
    this.hooks = {
      environment: new SyncHook([]),
      afterEnvironment: new SyncHook([]),
      entryOption: new SyncHook(["context", "entry"]),


      beforeRun: new AsyncSeriesHook(["compiler"]),
      run: new AsyncSeriesHook(["compiler"]),


      beforeCompile: new AsyncSeriesHook(['params']),
      compile: new SyncHook(['params']),


      make: new AsyncParallelHook(['compilation']),



      afterCompile: new AsyncSeriesHook(["params"]),
    }
  }
  newCompilation() {
    let compilation = new Compilation(this)


    return compilation
  }
  compile() {

    this.hooks.beforeCompile.callAsync({}, err => {
      this.hooks.compile.call()


      const compilation = this.newCompilation();


      this.hooks.make.callAsync(compilation, () => {

      })


    })
  }
  run() {
    this.hooks.beforeRun.callAsync(this, err => {
      this.hooks.run.callAsync(this, err => {
        this.compile()
      })
    })
  }
}
module.exports = Compiler;

/*
  compiler
    run方法 经历了 beforeRun  run
      run开始后开始compile
   
    compiler方法 经历了 beforeCompile  compile
      创建一个compilation 保存编译的结果

  compilation
    make阶段 seal emit  done
        make的钩子在process函数早已注册
*/