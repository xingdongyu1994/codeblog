import React from './react';
import ReactDom from './react-dom';
let style = { border: '1px solid red', margin: '5px' };
var element = (
  <div id="A1" style={style}>
    A1
    <div id="B1" style={style}>
      B1
      <div id="C1" style={style}>
        C1
      </div>
      <div id="C2" style={style}>
        C2
      </div>
    </div>
    <div id="B2" style={style}>
      B2
    </div>
  </div>
);
// console.log('滚滚滚', element);
ReactDom.render(element, document.getElementById('app'));

// console.log('滚滚滚', element);

// React.createElement(
//   'div',
//   {
//     id: 'A1',
//     style: style,
//   },
//   'A1',
//   React.createElement(
//     'div',
//     {
//       id: 'B2',
//       style: style,
//     },
//     React.createElement(
//       'div',
//       {
//         style: style,
//       },
//       'B2(1)'
//     ),
//     React.createElement(
//       'div',
//       {
//         style: style,
//       },
//       'B2(2)'
//     )
//   ),
//   React.createElement(
//     'div',
//     {
//       id: 'B3',
//       style: style,
//     },
//     'B3'
//   )
// );
