/*
  fiber 架构
  为了弥补不足 设计fiber数据结构+算法  = fiber架

  react应用 
    root  不是fiber 有个属性指向current树 指向current树也指向workInProgress树
    current树 每一个fiber都对应着一个jax的节点 每一个节点都是一个fiber   保存上次状态
    workInProgress  每一节点都是一个fiber树 每一个fiber都d对应节点     保存本次新状态

    两树


  
  初次渲染
      这时候没有current树
      在创建跟root时候 创建了一个initFiber 未初始化
      react的current树指向initFiber
      在创建一个workInProgress


  两个阶段
    render   创建fiber的过程
       1. 每个节点创建新的fiber workInProgress  (也可能是复用) 生成一个新状态的workInProgress树
       2. div创建一个真实的dom节点   只会创建不会插入到页面中
       3. 如果不是初次渲染  新旧fiber对比  通过链表形式挂到root



    commit   真正操作 
       执行生命周期
       获取rootfiber 获取链表 操作页面

  下次渲染






  1. 实现一个虚拟dom

   js对象  js对象描述网页
*/