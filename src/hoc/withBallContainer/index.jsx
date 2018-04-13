import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

import Ball from '../../components/ball';
import CircleOutline from '../../components/circleOutline';

const withBallContainer = WrappedComponent =>
  class extends PureComponent {
    static defaultProps = {
      className: ''
    };

    static propTypes = {
      className: PropTypes.string
    };

    handleOnClick = ({ pageX, pageY }) => {
      this.animateOutline(pageX, pageY);
      this.animateBalls(pageX, pageY);
    };

    animateOutline = (x, y) => {
      anime({
        targets: '.circle-outline',
        width: [0, this.baseRadius * 2],
        height: [0, this.baseRadius * 2],
        opacity: [1, 0],
        translateX: [x, x - this.baseRadius],
        translateY: [y, y - this.baseRadius],
        zIndex: [99, -1],
        easing: 'easeOutSine'
      });
    }

    animateBalls = (x, y) => {
      this.ballKeys.forEach((key, index) => {
        const baseAngle = 60;
        const innerRadius = 10 + 10 * Math.random();
        const outerRadius = (this.baseRadius) - 50 * (Math.random() - 1);
        const originX = Math.sin((index + 1) * baseAngle) * innerRadius + x;;
        const originY = Math.cos((index + 1) * baseAngle) * innerRadius + y;;
        const newX = Math.sin((index + 1) * baseAngle) * outerRadius + x;
        const newY = Math.cos((index + 1) * baseAngle) * outerRadius + y;
        anime({
          targets: `.${key}.ball-${index}.ball`,
          translateX: [originX, newX],
          translateY: [originY, newY],
          opacity: [1, 0],
          width: [25, 0],
          height: [25, 0],
          easing: 'easeOutCubic',
          // duration: () => 100 * index * Math.random(),
          delay: index * 10 * Math.random()
          // loop: true
        });
      });
    };

    colors = ['primary', 'accent'];

    ballKeys = Array.from({ length: 20 }, (x, i) => this.colors[i % this.colors.length]);

    baseRadius = 150;


    render() {
      return (
        <div
          role="presentation"
          className={`${this.props.className} ball-container`}
          onClick={e => this.handleOnClick(e)}
          onKeyDown={() => {}}
        >
          {this.ballKeys.map((key, index) => (
            <Ball
              key={`${key + index}`}
              style={{ zIndex: index }}
              className={`${key} ball-${index}`}
            />
          ))}
          <CircleOutline />
          <WrappedComponent />
        </div>
      );
    }
  };

export default withBallContainer;
