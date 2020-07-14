// import RouterHash from './hash'

// import RouterHistory from './history'

// var r = new RouterHash()
// r.init()
// r.route('/', function () {
//   console.log("点击首页")
// })
// r.route('/home', function () {
//   console.log("点击home页")
// })
// r.route('/name', function () {
//   console.log("点击name页")
// })
// var h = new RouterHistory()
// h.init()
// h.route('/', function () {
//   console.log("点击首页")
// })
// h.route('/home', function () {
//   console.log("点击home页")
// })
// h.route('/name', function () {
//   console.log("点击name页")
// })

// import React from 'react';
// import ReactDom from 'react-dom';
// import ReactHashRouter from './ReactHashRouter';
// import Link from './Link';
// import Route from './Route';

// export default class App extends React.Component {
//   render() {
//     return (
//       <ReactHashRouter>
//         <div>
//           <ul>
//             <li>
//               <Link to="/">首页</Link>
//             </li>
//             <li>
//               <Link to="/home">home</Link>
//             </li>
//             <li>
//               <Link to="/name">name</Link>
//             </li>
//           </ul>
//           <Route path="/" component={<div>首页</div>} />
//           <Route path="/home" component={<div>home</div>} />
//           <Route path="/name" component={<div>name</div>} />
//         </div>
//       </ReactHashRouter>
//     );
//   }
// }

import React from 'react';
import ReactHashRouter from './ReactHashRouter';
// import LinkHistory from './LinkHistory';
import { RouteHistory, LinkHistory } from './RouteHistory';

export default class App extends React.Component {
  render() {
    return (
      <ReactHashRouter>
        <div>
          <ul>
            <li>
              <LinkHistory to="/">首页</LinkHistory>
            </li>
            <li>
              <LinkHistory to="/home">home</LinkHistory>
            </li>
            <li>
              <LinkHistory to="/name">name</LinkHistory>
            </li>
          </ul>
          <RouteHistory path="/" component={<div>首页</div>} />
          <RouteHistory path="/home" component={<div>home</div>} />
          <RouteHistory path="/name" component={<div>name</div>} />
        </div>
      </ReactHashRouter>
    );
  }
}
