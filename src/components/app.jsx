import React from 'react';

import Mouse from './mouse';

const App = () => (
  <Mouse id="app">{() => <div className="container" />}</Mouse>
);


export default App;
