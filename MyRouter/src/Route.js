import React from 'react';
import ReactDom from 'react-dom';

const uiUrlIsMatch = (path, hash) => {
  console.log('个糖拌人份111', path);
  console.log('个糖拌人份1112222', hash);
  if (!path) {
    return {
      path: null,
      url: hash,
    };
  }
  const match = new RegExp(path).exec(hash);
  if (!match) {
    return null;
  }
  const url = match[0];
  console.log('tehgre ', url);
  return {
    path,
    url,
    isExact: true,
  };
};
class Route extends React.Component {
  componentWillMount() {
    window.addEventListener('hashchange', this.updateView, false);
  }
  updateView = () => {
    this.forceUpdate();
  };
  render() {
    console.log('不辜负的', this.props);
    const { path, component } = this.props;
    let match = uiUrlIsMatch(path, window.location.hash.slice(1));
    console.log('个糖拌人份', match, component);
    if (!match) {
      return null;
    }
    if (component) {
      return component;
    } else {
      return null;
    }
  }
}
export default Route;
