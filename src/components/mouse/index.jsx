import React from 'react';
import PropTypes from 'prop-types';
import Burst from './animations/burst';
import Flare from './animations/flare';

class Mouse extends React.PureComponent {
  static defaultProps = {
    id: '',
    children: () => {},
    showBurst: true,
    showFlare: true
  };

  static propTypes = {
    id: PropTypes.string,
    children: PropTypes.func,
    showBurst: PropTypes.bool,
    showFlare: PropTypes.bool
  };

  state = {
    x: 0,
    y: 0,
    update: false
  };

  render() {
    return (
      <div
        role="presentation"
        id={this.props.id ? this.props.id : undefined}
        onClick={({ pageX: x, pageY: y }) => this.setState(p => ({ x, y, update: !p.update }))}
      >
        {this.props.showBurst && <Burst {...this.state} />}
        {this.props.showFlare && <Flare {...this.state} />}
        {this.props.children}
      </div>
    );
  }
}

export default Mouse;
