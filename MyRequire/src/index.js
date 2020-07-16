(function (global) {
  var myRequire = {}
  var isMainEnter = true
  // 定义一个每一个模块加载情况
  var pending = "PENDING"
  var resolved = 'RESOLVED'
  var rejected = 'REJECTED'

  var myRequireEvents = {
    status: {}, // 存在这状态
    objList: {}, // key保存  成功 错误回调
    listens: function (dependencies, cb) {

      dependencies.forEach((dep) => {
        if (!myRequireEvents.status[dep]) {
          myRequireEvents.status[dep] = pending;
        }
      });




      if (!myRequireEvents.objList[JSON.stringify(dependencies)]) {
        myRequireEvents.objList[JSON.stringify(dependencies)] = {}
      }
      myRequireEvents.objList[JSON.stringify(dependencies)].resolvedCallback = []
      myRequireEvents.objList[JSON.stringify(dependencies)].resolvedCallback.push(cb)

      myRequireEvents.objList[JSON.stringify(dependencies)].rejectCallback = []
      myRequireEvents.objList[JSON.stringify(dependencies)].rejectCallback.push(cb)
      myRequireEvents.objList[JSON.stringify(dependencies)].done = false;
    },
    triggers: function (key, status) {

      myRequireEvents.status[key] = status;

      let defineArrStatus
      for (let key in myRequireEvents.objList) {
        var keys = JSON.parse(key)
        let modules = myRequireEvents.objList[key];
        for (let name of keys) {
          if (myRequireEvents.status[name] === 'REJECT') {
            defineArrStatus = 'REJECT';
          }
          if (myRequireEvents.status[name] === 'PENDING') {
            defineArrStatus = 'PENDING'
          }
        }
        defineArrStatus = 'RESOLVED';




        if (defineArrStatus === 'RESOLVED') {

          console.log("给他人分为阿萨德发送到发大水", modules.done)

          modules.resolvedCallback.forEach((successFn) => {
            successFn()
          });

          // modules.done = true;
        }




      }

    }
  }

  myRequire.getModuleNameFromSrc = function (name) {
    let fileNameReg = /[^\\\/]*[\\\/]+/g;
    return name.replace(fileNameReg, '').split('.')[0]
  }

  myRequire.requires = function (dependencies, cb) {
    dependencies.forEach((name) => {
      myRequire.loadModules(name, false);
    });

    myRequireEvents.listens(dependencies, cb)

  }


  myRequire.loadModules = function (moduleName, isMainEnter) {
    let script = document.createElement('script');
    script.type = 'text/javascript';

    moduleName = myRequire.getModuleNameFromSrc(moduleName)
    script.src = `./${moduleName}.js`;
    if (!isMainEnter) {
      script.onload = function () {
        myRequireEvents.triggers(moduleName, resolved)
      }
      script.error = function () {
        console.log("认同和供热11111")
      }
    }


    document.getElementsByTagName('head')[0].appendChild(script);
  }


  // 初始化加载入口的主模块main.js
  myRequire.init = function () {
    var scripts = document.getElementsByTagName('script');
    var requireScript = scripts[scripts.length - 1];
    var mainScript = requireScript.getAttribute('data-main');
    myRequire.loadModules(mainScript, isMainEnter)
  }
  myRequire.init()


  global.defines = myRequire.defines;
  global.requires = myRequire.requires;
})(window)