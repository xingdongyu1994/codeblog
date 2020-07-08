/*
  redux轮子

  1. redux简介
      状态管理机  并非啥时候都要redux 简单的用户操作跟服务器交互不是特别多  状态不是特别多不需要共享时候可以不用redux
      使用场景：
        用户使用方式复杂  交互复杂  状态需要各个组件来共享   一个组件需要改变其他组件的状态等等这种复杂的场景都是需要redux
      设计思想：
        所有的状态存在一个对象上 

      是一个框架不一定是跟react结合使用  
  1. 平常使用
      
      import {createStore} from 'redux'

      // reducer  (state, action) => state  是一个纯函数
      function count(state = 0, action) {
        switch (action.type) {
          case "ADD":
            return state + 1;
          case "DEL":
            return state - 1;
          default:
            return state;
        }
      }

      // 通过createStore 创建一个store   传进去一个reducer
      let store = createStore(count)

      // 返回的 getState  dispatch  subscribe订阅事件
      store.subscribe(function(data) {
        console.log("订阅的事件", data)
      })

      // 触发事件

      store.dispatch({type:'ADD'})
      store.dispatch({type:'DEL'})
    




  2. action   reducer   store关系


      会发现 这几个关系
      1. 我们会先通过reducer来调用createStore 来创建一个store  把触发的动作dispatch操作给到用户
      2. 当dispatch触发一个action时候 store会自动利用传进来的action和自己当前state 调用reducer返回一个新的state  并且
         当前有subscribe注册的回调就遍历queue队列执行回调
  3. 一步一步实现
 
    1. 我们要根据自己定义的reducer来创建一个store管理状态中心 返回出dispatch  subscribe 
    2. 我们看到我们index.js例子中只有一个 countReducer  还比较简单  我们正常的项目当中会有多个reducer文件
       需要我们来合并这些reducer成一个全局reducer
       combineReducer({reducer1, reducer2, reducer3 .....})
       
       var  obj = {}
        return  function(state ={}, action) {
           for(var key in reducers) {
               obj[key] = reducers[key](state[key], action)
            }
        }





    3.中间件 redux提供各种中间件 比如 redux-thunk  redux-log等等
        看下我们正常dispatch使用过程都是dispatch一个对象{type:"XXX"}  
        dispatch({"type":"XX"})
        使用thunk以后 dispatch不再是只接受一个对象  
        常见场景  异步请求  
        看下正常：
          fetch(XXX).then(data=> {
            dispatch({
              type:'LOAD',
              payload:data
            })
          })
          这样可以解决了异步请求数据  但是有个问题一旦很多请求时候 不可能每次都是fetch（xxx） 然后dispatch吧 我们需要抽出一个函数
          function globalFetch(xxx) {
            fetch(XXX).then(data=> {
              dispatch({
                type:'LOAD',
                payload:data
              })
            })
          }
          
          dispatch(globalFetch('wwww.xxx.com/xxx'))
          发现使用了thunk中间件后变成一个dispatch接受函数了


          这需要我们applyMiddleware  一开始就注册我们这个中间件 加强我们dispatch功能 让其支持更多事情

          applyMiddleware这个函数负责接受中间件
          
          简单的redux-log
          function reduxLog({dispatch, getState}) {
             return function(next){
                return  function(action) {
                    next(action)
                }
             }
          }

          假设我们不用中间件如何使用log那
          store.dispatch = function(action) {
            console.log(store.getState());
            dispatch(action);
            console.log(store.getState())
          }
          改变了dispatch 包装一个函数  正常发dispatch在函数里面  增强我们dispatch


总结下
  我们实现redux
  需要几个函数  
  createStore创建Store状态管理中心
  combineReducer({r1,r2,r3})合并多个reducer 都挂在一个store树上
  applyMiddleware([m1,m2,m3])中间件函数作用在发起action到reducer中间的的插入操作  在创建createStore时候就告诉使用哪个中间件

*/