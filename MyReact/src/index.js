import React from './react';
import ReactDom from 'react-Dom';
let style = { border: '1px solid red', margin: '5px' };
var element = (
  <div id="A1" style={style}>
    A1
    <div id="B2" style={style}>
      <div style={style}>B2(1)</div>
      <div style={style}>B2(2)</div>
    </div>
    <div id="B3" style={style}>
      B3
    </div>
  </div>
);
// ReactDom.render(element, document.getElementById('app'));

console.log('滚滚滚', element);

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
