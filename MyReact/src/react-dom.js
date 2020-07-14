// 文本元素
const ELEMENT_TEXT = Symbol.for('ELEMENT_TEXT')
// root fiber
const TAG_ROOT = Symbol.for('TAG_ROOT')
// host fiber  原生节点 span  div 
const TAG_HOST = Symbol.for('TAG_HOST')
// 文本 fiber节点
const TAG_TEXT = Symbol.for('TAG_TEXT')
// 函数 fiber类型
const TAG_FUNCTION = Symbol.for('TAG_FUNCTION')

let nextUnitOfWork = null

function scheduleRootFiber(workInProgress) {
  nextUnitOfWork = workInProgress
}

function beginWork() {

}

function performUnitOfWork(workInProgress) {
  let next = beginWork(workInProgress) // 子节点的fiber 返回
  if (next === null) { // 没有了子节点 找兄弟节点
    while (true) {
      let returnFiber =
    }
  }

  return next
}

// 循环创建fiber
function workLoop(nextUnitOfWork) {
  while (!!nextUnitOfWork) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
  }
  if (!nextUnitOfWork) {
    console.log("结束")
  }
}

function render(element, container) {
  // 1. rootFiber
  let rootFiber = {
    tag: TAG_ROOT, //fiber 类型
    stateNode: container, //对应一个真实的dom 实例
    props: {
      children: [element]
    }, //
    child: null, // 每一个fiber上指向一个firstChild
    sibling: null, // 每一个fiber有一个隔壁兄弟
    return: null, // 当前父fiber节点
    index: 0, // 数组
    memoizeState: null, // fiberState
    memoizeProps: null, // fiberProps
  }
  // 2. 从上之下创建每一个节点的fiber
  scheduleRoot(rootFiber)
}

const ReactDom = {
  render
}
export default ReactDOM