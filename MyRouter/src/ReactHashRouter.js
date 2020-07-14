import React from 'react';

export default class ReactHashRouter extends React.Component {
  // componentDidMount() {
  //   window.location.hash = '/';
  // }
  render() {
    return this.props.children
  }
}