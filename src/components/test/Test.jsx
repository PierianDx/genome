/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Test extends Component {
  static propTypes = {
    className: PropTypes.string,
    uppercase: PropTypes.bool,
    children: PropTypes.string
  };

  static defaultProps = {
    className: '',
    uppercase: false,
    children: ''
  };

  render() {
    const { className, uppercase, children } = this.props;
    return <div className={cx(className)}>{uppercase ? children.toUpperCase() : children}</div>;
  }
}

export default Test;
