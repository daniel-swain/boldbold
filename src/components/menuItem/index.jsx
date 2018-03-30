import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ name, func = () => {} }) => (
  <li className={`menu-item ${name}-action`}>
    <button className="link-btn" onClick={() => func()}>{name}</button>
  </li>
);

MenuItem.defaultProps = {
  func: () => {
    console.log('Missing function');
  }
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  func: PropTypes.func
};

export default MenuItem;
