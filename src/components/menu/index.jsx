import React from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

import Header from '../header';
import MenuItem from '../menuItem';

class Menu extends React.PureComponent {
  constructor() {
    super();
    this.actionsItems = [
      { name: 'feed' },
      { name: 'menu' },
      { name: 'projects' },
      { name: 'contact' }
    ];
  }

  componentDidMount() {
    this.actionsItems.forEach((item, i) => {
      anime({
        targets: `.list-item.${item.name}`,
        translateX: [-100, 0],
        opacity: 1,
        delay: (250 * (i + 1))
      });
    });
  }

  render() {
    return (
      <div className={`menu ${this.props.className}`}>
        <Header />
        <ul className="menu-actions">
          {this.actionsItems.map(item => <MenuItem key={item.name} {...item} />)}
        </ul>
      </div>
    );
  }
}

Menu.defaultProps = {
  className: ''
};

Menu.propTypes = {
  className: PropTypes.string
};

export default Menu;
