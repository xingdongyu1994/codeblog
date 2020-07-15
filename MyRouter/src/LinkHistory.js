import React from 'react';

class LinkHistory extends React.Component {
  handleUrl = () => {
    e.preventDefault();
    const { to } = this.props;
    window.history.pushState({}, null, to);
    instances.forEach((instance) => instance.forceUpdate());
  };
  render() {
    const { to, children } = this.props;
    return (
      <a href={`${to}`} onClick={this.handleUrl}>
        {children}
      </a>
    );
  }
}
export default LinkHistory;
