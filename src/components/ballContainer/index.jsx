import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import debounce from 'lodash/debounce';

import Ball from '../ball';

class BallContainer extends PureComponent {
  static defaultProps = {
    className: ''
  };

  static propTypes = {
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.animateBall = debounce(this.animateBalls, 0);
  }

  onMouseMove = ({ screenX, screenY }) => {
    const proposedX = screenX - this.mouseOffSet.x;
    const proposedY = screenY - this.mouseOffSet.y;

    const translateX = proposedX < 0 ? 0 : proposedX;
    const translateY = proposedX < 0 ? 0 : proposedY;
    this.animateBalls({ translateX, translateY });
  };

  animateBalls = ({ translateX: x, translateY: y }) => {
    this.ballKeys.forEach((key, index) => {
      const baseAngle = 60;
      const radius = 150;
      const newX = Math.sin((index + 1) * baseAngle) * radius + x;
      const newY = Math.cos((index + 1) * baseAngle) * radius + y;
      anime({
        targets: `.${key}.ball-${index}.ball`,
        translateX: [x, newX],
        translateY: [y, newY],
        opacity: [1, 0],
        width: [15, 0],
        height: [15, 0],
        easing: 'linear',
        duration: () => 200 * index * Math.random(),
        delay: index * 10 * Math.random(),
        // loop: true
      });
    });
  };

  mouseOffSet = {
    x: 200,
    y: 104
  };

  colors = ['primary', 'accent'];

  ballKeys = Array.from({ length: 20 }, (x, i) => this.colors[i % this.colors.length]);

  render() {
    const ballProps = {
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0
    };

    return (
      <div
        className={`${this.props.className} ball-container`}
        onClick={e => this.onMouseMove(e)}
      >
        {this.ballKeys.map((key, index) => (
          <Ball
            key={`${key + index}`}
            style={{ zIndex: index }}
            className={`${key} ball-${index}`}
            {...ballProps}
          />
        ))}
      </div>
    );
  }
}

export default BallContainer;
