/*
   router
   1. 简介
      现在我们都是单页面应用  
        我们为啥需要路由系统
          前端路由直接跳转 不会请求后端数据  增加用户体验
        路由系统如何实现
          我们前端的router有两大路由系统  history  hash来实现的
          hash
            #开头 #api/1  #api/2  不会刷新页面  改变的hash通过调用hashChange回调来监听


          history
            这个是基于 h5的 history.pushState  history.popState history.go  
            history.pushState(state={json}, title=null, url)
            history 路由系统 pushState的改变不会触发回调知道url的变化
            所以我们模拟  拦截改变触发history改变的情况


            浏览器点击回退前进
            点击a跳转标签
          
        react-router如何实现
        
          v4 react-router-dom

         hash react-router
          Router  Route  Link  三个组件实现路由系统
          <Router>
            <Link to="/aa">1</Link>
            <Route path="/aa" component={<div>1</div>}></Route>
              得到这个path  跟我们window.location.has.slice(1)做匹配  这个时候 通过Link已经在改变hash
          </Router>

         history react-router

         这个比较麻烦  参考https://github.com/youngwind/blog/issues/109 

         做了两件事  
         定义一个 instances = [] 存储页面上所有的route
         每次的点击Link 跟监听popstate浏览器的回退前进 都遍历这个队列 强制刷新



        
   2. 平常使用
   3. 实现router
*/