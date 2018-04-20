import React from 'react';
import PropTypes from 'prop-types';

import Mouse from './mouse';

const App = props => (
  <Mouse id="app">{() => <div className="container">{props.children}</div>}</Mouse>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
