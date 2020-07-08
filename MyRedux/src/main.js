function createStore(reducer, mid) {
  if (typeof mid === 'function') {
    return mid(createStore)(reducer)
  }
  let state = {}; // 初始化一个一开始的state
  const queue = []; // 订阅事件的队列

  const subscribe = (cb) => {
    queue.push(cb);
  };
  const dispatch = (action) => {
    state = reducer(state, action);
    // 每次完事执行回调
    queue.forEach((item) => {
      item();
    });
  };
  const getState = () => {
    return state;
  };
  // 第一次我们自动触发一次
  dispatch({});
  return {
    dispatch,
    subscribe,
    getState,
  };
}

// 1. 到此第一步重要的创建Store状态中心已经创建完毕

function combineReducer(reducers) {
  return function (state = {}, action) {
    let obj = {};
    for (let key in reducers) {
      obj[key] = reducers[key](state[key], action);
    }
    return obj;
  };
}

// 2. 到此我们将多个reducer合并了 所有reducer数据做了一个合并 维护在一个store中

function applyMiddleware(...middleware) {
  return function a1(createStore) {
    return function a2(reducer) {
      const store = createStore(reducer)
      let dispatch = store.dispatch

      //重新包装dispatch
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action)
      }

      let res = []
      res = middleware.map((item) => {
        return item(middlewareAPI)
      })

      dispatch = compose(...res)(store.dispatch) // store.dispatch作为中间件的next来操作  
      return {
        ...store,
        dispatch
      }
    }
  }
}


// 3. 至此我们完成了中间件的使用  但是有时候我们使用中间件时候  是连续使用的  就需要我们的compose
function compose(...funcs) {
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

export {
  createStore,
  combineReducer,
  applyMiddleware
};