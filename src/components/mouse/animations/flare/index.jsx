import React from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

import ThemedOutline from './outline';

class Flare extends React.PureComponent {
  static defaultProps = {
    baseRadius: 150
  }

  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    baseRadius: PropTypes.number
  }

  componentDidUpdate(prevProps, nextProps, snapshot) {
    if (snapshot) {
      this.animateFlare();
    }
  }

  getSnapshotBeforeUpdate() {
    // We want to update on any props coming in
    return !!(this.props.x && this.props.y);
  }

  animateFlare = () => {
    const { x, y, baseRadius } = this.props;
    anime({
      targets: '.flare',
      width: [0, baseRadius * 2],
      height: [0, baseRadius * 2],
      opacity: [1, 0],
      translateX: [x, x - baseRadius],
      translateY: [y, y - baseRadius],
      duration: 500,
      zIndex: [99, -1],
      easing: 'easeOutSine'
    });
  }

  render() {
    return (
      <ThemedOutline className="flare" />
    );
  }
}

export default Flare;
