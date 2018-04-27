import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_THEME = 'default';
const ALTERNATE_THEME = 'alternate';

const PINK = '#ff80ab';
const LIGHT_PINK = '#FCE4EC';
const WHITE = '#fff';

const themes = {
  [DEFAULT_THEME]: {
    primary: PINK,
    accent: LIGHT_PINK
  },
  [ALTERNATE_THEME]: {
    primary: LIGHT_PINK,
    accent: WHITE
  }
};

export const ThemeContext = createContext({
  current: DEFAULT_THEME,
  theme: themes[DEFAULT_THEME]
});

class Theme extends Component {
  static propTypes = { children: PropTypes.node.isRequired }

  state = { current: DEFAULT_THEME, theme: themes[DEFAULT_THEME] }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const withTheme = WrappedComponent => props => (
  <ThemeContext.Consumer>
    {context =>
      <WrappedComponent {...props} theme={context.theme} />
    }
  </ThemeContext.Consumer>
);


export default Theme;
