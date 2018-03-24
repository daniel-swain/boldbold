import React from 'react';
import anime from 'animejs';

class Header extends React.PureComponent {
  componentDidMount() {
    this.header = anime({
      targets: '.header',
      opacity: 1,
      loop: true,
      delay: 1000
    });
  }

  render() {
    return (
      <div className="header">
        <span className="title">Daniel Swain</span>
      </div>
    );
  }
}

export default Header;
