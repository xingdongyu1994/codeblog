// root fiber
const HOSTROOT = 'HOSTROOT'

// 文本 fiber节点
const HOSTTEXT = 'HOSTTEXT'
// 组件类型的 fiber
const CLASSCOMPONENT = 'CLASSCOMPONENT'
// 普通原生dom fiber  原生节点 span  div
const HOSTCOMPONENT = 'HOSTCOMPONENT'

let nextUnitOfWork = null
let saveRootFiber = null

function scheduleRootFiber(workInProgress) {
  nextUnitOfWork = workInProgress
  saveRootFiber = workInProgress
  workLoop(nextUnitOfWork)
}

function reconcileChildren(workInProgress, newChildren) {
  /*
    对  props的children 一次创建fiber
  */

  var newChildrenIndex = 0
  var pre
  while (newChildrenIndex < newChildren.length) {
    var newChild = newChildren[newChildrenIndex]
    var tag
    if (newChild.type === 'ELEMENT_TEXT') {
      tag = HOSTTEXT
    } else if (typeof newChild.type == 'string') {
      tag = HOSTCOMPONENT
    }
    /* 
    
      6. 子节点的fiber  
       有个child   sibling

       数组的第一项   workInProgress.child = newChildFiber
         其他的第二  第三第四等项  都用sibling 来指向这个newfiber



    */
    var newChildrenFiber = {
      tag: tag,
      type: newChild.type,
      stateNode: null,
      props: newChild.props,
      return: workInProgress,
      effectTag: 'ADD'
    }
    if (newChildrenFiber) {
      if (newChildrenIndex === 0) {
        workInProgress.child = newChildrenFiber
      } else {
        pre.sibling = newChildrenFiber
      }
      pre = newChildrenFiber
    }
    newChildrenIndex++
  }
}

function updateHostRoot(workInProgress) {

  let newChildren = workInProgress.props.children

  reconcileChildren(workInProgress, newChildren)
}

function updateHostComponent(workInProgress) {
  if (!workInProgress.stateNode) {
    workInProgress.stateNode = createDom(workInProgress)
  }
  let newChildren = workInProgress.props.children
  reconcileChildren(workInProgress, newChildren)
}

function createDom(workInProgress) {
  if (workInProgress.tag === "HOSTTEXT") {
    return document.createTextNode(workInProgress.props.text)
  } else if (workInProgress.tag === 'HOSTCOMPONENT') {
    return document.createElement(workInProgress.type)
  }
}

function updateHostText(workInProgress) {
  // 这里已经fiber到了最下面时候 
  /*
      7. 到最后一个无子节点的节点了  开始创建dom  给他每一个fiberde stateNode实例
  */

  if (!workInProgress.stateNode) {
    // 1. 先创建一个dom
    workInProgress.stateNode = createDom(workInProgress)
  }

}

function beginWork(workInProgress) {
  let tag = workInProgress.tag

  /*
     5. 根据fiber的tag  是HOSTROOT  还是CLASSCOMPONENT  HOSTTEXT
  */
  if (tag === "HOSTROOT") { // rootfiber
    updateHostRoot(workInProgress)
  } else if (tag === 'CLASSCOMPONENT') {

    // updateClassComponent(workInProgress)
  } else if (tag === 'HOSTCOMPONENT') {
    updateHostComponent(workInProgress)
  } else if (tag === 'HOSTTEXT') {
    updateHostText(workInProgress)
  }
}

function okNullPerformUnitOfWork(workInProgress) {
  let returnFiber = workInProgress.return
  if (returnFiber) {

    //  将自己的儿子们收集到父亲的firstEffect  lastEffect
    if (!returnFiber.firstEffect) {
      returnFiber.firstEffect = workInProgress.firstEffect
    }
    if (workInProgress.lastEffect) {

      if (returnFiber.lastEffect) {
        returnFiber.lastEffect.nextEffect = workInProgress.firstEffect
      }

      returnFiber.lastEffect = workInProgress.lastEffect
    }


    //  自己收集到父亲的firstEffect  lastEffect

    var effectTag = workInProgress.effectTag
    if (effectTag) {
      if (returnFiber.lastEffect) {
        returnFiber.lastEffect.nextEffect = workInProgress
      } else {
        returnFiber.firstEffect = workInProgress
      }
      returnFiber.lastEffect = workInProgress
    }

  }
}

function performUnitOfWork(workInProgress) {
  // 4. 开始创建fiber了
  beginWork(workInProgress) // 创建子节点的fiber


  // 8. 看下还有子节点吗

  if (workInProgress.child) {
    return workInProgress.child
  }
  // 9. 没有子节点了  返回兄弟节点   没有兄弟节点 就返回到父节点
  while (workInProgress) {

    // 10. 没有子节点了  开始他的链表

    okNullPerformUnitOfWork(workInProgress) // 没有子节点了


    if (workInProgress.sibling) { // 有兄弟节点
      return workInProgress.sibling
    } else { // 没有兄弟节点 返回叔叔节点
      workInProgress = workInProgress.return
    }
  }
}


function commitWork(workInProgress) {
  if (!workInProgress) {
    return
  }
  var returnFiber = workInProgress.return
  var returnDom = returnFiber.stateNode


  if (workInProgress.effectTag === 'ADD') {
    returnDom.appendChild(workInProgress.stateNode)
  }
}

function commitRoot() {
  console.log("结束", saveRootFiber)
  let workInProgress = saveRootFiber.firstEffect
  while (workInProgress) {
    commitWork(workInProgress)
    workInProgress = workInProgress.nextEffect
  }

  saveRootFiber = null

}


// 3. 循环创建fiber
function workLoop(nextUnitOfWork) {

  // render阶段
  // a.创建fiber  render的过程  创建fiber   收集副作用
  while (!!nextUnitOfWork) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
  }

  // commit阶段

  // b. 提交 收集到的副作用
  if (!nextUnitOfWork && saveRootFiber) {

    commitRoot()
  }
}

function render(element, container) {
  /*
     1. rootFiber react自带的 rooFiber
  */
  let rootFiber = {
    tag: HOSTROOT, //fiber 类型
    stateNode: container, //对应一个真实的dom 实例
    props: {
      children: [element]
    }
  }
  // 2. 从上之下创建每一个节点的fiber
  scheduleRootFiber(rootFiber)
}

const ReactDom = {
  render
}
export default ReactDom