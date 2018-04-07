import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Ball extends PureComponent {
  static defaultProps = {
    className: '',
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0
  };

  static propTypes = {
    className: PropTypes.string,
    minX: PropTypes.number,
    maxX: PropTypes.number,
    minY: PropTypes.number,
    maxY: PropTypes.number
  };

  render() {
    return <div className={`${this.props.className} ball`} />;
  }
}

export default Ball;
