import React from 'react';

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
let instances = [];

class RouteHistory extends React.Component {
  componentWillMount() {
    window.addEventListener('popstate', () => {
      console.log('格瑞丰');
      instances.forEach((instance) => instance.forceUpdate());
    });
    instances.push(this);
  }

  render() {
    console.log('沟通别人', this.props, instances);
    const { path, component } = this.props;
    if (!component) {
      return null;
    } else {
      let match = uiUrlIsMatch(path, window.location.pathname);
      if (match) {
        return component;
      } else {
        return null;
      }
    }
  }
}

class LinkHistory extends React.Component {
  handleUrl = (e) => {
    e.preventDefault();
    const { to } = this.props;
    console.log('退高热', instances);
    window.history.pushState({}, null, to);

    instances.forEach((instance) => instance.forceUpdate());
  };
  render() {
    const { to, children } = this.props;
    return (
      <a href={to} onClick={this.handleUrl}>
        {children}
      </a>
    );
  }
}
export { RouteHistory, LinkHistory };
