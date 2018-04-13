import React from 'react';

import Menu from './menu';
import Feed from './feed';
import withBallContainer from '../hoc/withBallContainer';

const App = (props) => (
  <div className="container">
    <div className="row">
      <Menu className="three columns" />
      <Feed className="nine columns" />
      {/* <BallPit className="nine columns" /> */}
    </div>
    {props.children}
  </div>
);

export default withBallContainer(App);
