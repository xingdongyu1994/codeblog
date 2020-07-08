// 第一种情况  只有一个reducer

// import { createStore } from './main';
// function countReducer(state = 0, action) {
//   switch (action.type) {
//     case 'ADD':
//       return state + 1;
//     case 'DEL':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// let store = createStore(countReducer); //  这个状态中心包括了  getState  dispatch  subscribe

// let { getState, dispatch, subscribe } = store;

// subscribe(function () {
//   //  这时候得到state 是  1 2 3 2  触发了一次Add ADD ADD DEL
//   console.log('得到', getState());
// });

// dispatch({
//   type: 'ADD',
// });

// dispatch({
//   type: 'ADD',
// });

// dispatch({
//   type: 'ADD',
// });
// dispatch({
//   type: 'DEL',
// });

// 第二种情况 有多个reducer

// import {
//   createStore,
//   combineReducer
// } from './main';

// function countReducer(state = 0, action) {
//   switch (action.type) {
//     case 'ADD':
//       return state + 1;
//     case 'DEL':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// function countReducer2(state = 100, action) {
//   switch (action.type) {
//     case 'ADDD':
//       return state + 1;
//     case 'DELL':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// // let store = createStore(countReducer); // 如果按照这个写法  我们要多个store1  store2 等等 变成多个store了

// let lastReducer = combineReducer({
//   countReducer,
//   countReducer2
// }); // 产生一个全局lastReducer
// // console.log('灌灌灌灌', lastReducer);
// let lastStore = createStore(lastReducer); // 产生一个store
// console.log('他韩国人分为', lastStore);
// let {
//   getState,
//   dispatch,
//   subscribe
// } = lastStore;

// subscribe(function () {
//   console.log('最后结果', getState());
// });
// dispatch({
//   type: 'ADD',
// });

// dispatch({
//   type: 'ADD',
// });
// dispatch({
//   type: 'ADD',
// });

// dispatch({
//   type: 'ADDD',
// });
// dispatch({
//   type: 'ADDD',
// });
// dispatch({
//   type: 'ADDD',
// });


// 第三种情况  中间件


import {
  createStore,
  applyMiddleware
} from './main';

let reduxLog = function ({
  dispatch,
  getState
}) {
  return function (next) {
    return function (action) {
      console.log("执行之前打印", getState())
      next(action)
      console.log("执行之后打印", getState())
    }
  }
}
let reduxLog2 = function ({
  dispatch,
  getState
}) {
  return function (next) {
    return function (action) {
      console.log("执行之前打印222", getState())
      next(action)
      console.log("执行之后打印2222", getState())
    }
  }
}


function countReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'DEL':
      return state - 1;
    default:
      return state;
  }
}


let mid = [reduxLog, reduxLog2]

let store = createStore(countReducer, applyMiddleware(...mid)); //  这个状态中心包括了  getState  dispatch  subscribe 
// 创建createStore时候告诉redux我们要用的中间件

let {
  getState,
  dispatch,
  subscribe
} = store;


subscribe(function () {
  //  这时候得到state 是  1 2 3 2  触发了一次Add ADD ADD DEL
  console.log('得到', getState());
});
dispatch({
  type: "ADD"
})