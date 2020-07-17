import React from 'react';

class Provider extends React.Component {
  getChildrenContext() {
    return {
      store: this.props.store
    }
  }
  render() {
    return this.props.children
  }
}
export default Provider





/*

  Provider  包装根组件  将store数据挂在Provider组件的context 所有子组件就可以共享这个context了
*/