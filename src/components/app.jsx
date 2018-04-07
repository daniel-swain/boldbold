import React from 'react';

import Menu from './menu';
// import Feed from './feed';
import BallPit from './ballContainer';

const App = () => (
  <div className="container">
    <div className="row">
      <Menu className="three columns" />
      {/* <Feed className="nine columns" /> */}
      <BallPit className="nine columns" />
    </div>
  </div>
);

export default App;
