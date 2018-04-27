import React from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

import { withTheme } from '../../../contexts/theme';
import ThemedBall from './ball';

const getPoint = (x, y, angle, index, radius) => ({
  x: Math.sin((index + 1) * angle) * radius + x,
  y: Math.cos((index + 1) * angle) * radius + y
});

class Burst extends React.PureComponent {
  static defaultProps = {
    baseRadius: 150,
    baseAngle: 60,
    colors: ['primary', 'accent'],
    numOfBalls: 20
  };

  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    baseRadius: PropTypes.number,
    baseAngle: PropTypes.number,
    colors: PropTypes.arrayOf(PropTypes.string),
    numOfBalls: PropTypes.number
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { x, y, baseAngle } = this.props;
    if (snapshot) {
      this.getPoint = getPoint.bind(null, x, y, baseAngle);
      this.animateBurst();
    }
  }

  getSnapshotBeforeUpdate() {
    // We want to update on any props coming in
    return !!(this.props.x && this.props.y);
  }

  ballKeys = Array.from(
    { length: this.props.numOfBalls },
    (x, i) => this.props.colors[i % this.props.colors.length]
  );

  animateBurst = () => {
    this.ballKeys.forEach((color, index) => {
      const innerRadius = 10 + 10 * Math.random();
      const outerRadius = this.props.baseRadius - 50 * (Math.random() - 1);

      const origin = this.getPoint(index, innerRadius);
      const destination = this.getPoint(index, outerRadius);

      anime({
        targets: `.${color}.ball-${index}.ball`,
        translateX: [origin.x, destination.x],
        translateY: [origin.y, destination.y],
        opacity: [1, 0],
        width: [25, 0],
        height: [25, 0],
        easing: 'easeOutCubic',
        delay: index * 10 * Math.random()
      });
    });
  };

  render() {
    return this.ballKeys.map((key, index) => (
      <ThemedBall
        key={`${key + index}`}
        style={{ zIndex: index }}
        className={`${key} ball-${index} ball`}
      />
    ));
  }
}

export default Burst;
