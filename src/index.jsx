/* global document */
import React from 'react';
import { render } from 'react-dom';

import App from './components/app';
import './styles/base.scss';

render(<App />, document.querySelector('#app'));
