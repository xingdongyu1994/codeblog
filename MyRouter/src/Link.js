import React from 'react';
import ReactDom from 'react-dom';

class Link extends React.Component {
  render() {
    const { to, children } = this.props;
    return <a href={`#${to}`}>{children}</a>;
  }
}
export default Link;
