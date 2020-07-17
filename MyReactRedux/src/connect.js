import React from 'react';

function connect(mapStateToProps, mapDisPathToProps) {
  return function (WrapComponent) {
    class ProxyComponent extends React.Component {
      // 负责同外面数据的交互  在通过props 传递到用的组件中
      static contextTypes = {
        store: propTypes.object,
      };

      constructor(props, context) {
        super(props, context);
        this.store = context.store;
        this.state = mapStateToProps(this.store.getState()); // 得到传进来的组件state 通过context中store得到state
      }
      componentWillMount() {
        this.store.subscribe(function () {
          this.setState(mapStateToProps(this.store.getState())); // 壳子组件监听store数据变化 更新的自己的state
        });
      }
      render() {
        let actions = {};
        if (typeof mapDisPathToProps === 'function') {
          actions = mapDisPathToProps(this.store.dispatch);
        }
        return <WrapComponent {...this.state} {...actions} />;
      }
    }
    return ProxyComponent;
  };
}

export default connect;

// connect(mapStateToProps, mapDisPathToProps)(Headers)

/*

function mapStateToProps(state) {
    return { userinfo: state.userinfo }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

*/
