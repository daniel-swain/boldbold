import React from 'react';
import PropTypes from 'prop-types';

const Ball = ({ className }) => <div className={`${className} ball`} />;

Ball.defaultProps = {
  className: ''
};

Ball.propTypes = {
  className: PropTypes.string
};

export default Ball;
