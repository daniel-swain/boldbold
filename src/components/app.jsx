import React from 'react';

import Menu from './menu';

const App = () => (
  <div className="container">
    <div className="row">
      <Menu className="three columns" />
      <div className="feed nine columns">
        This is the feed
      </div>
    </div>
  </div>
);

export default App;
