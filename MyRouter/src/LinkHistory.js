import React from 'react';

class LinkHistory extends React.Component {
  handleUrl = () => {
    e.preventDefault();
    const { to } = this.props;
    window.history.pushState({}, null, to);
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
