import React from 'react';
import AppContext from './context'
import ThemeButton from './ThemeButton';

const ThemeTogglerButton = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <button onClick={context.themeToggler} >Toggle Theme</button>
      )}
    </AppContext.Consumer>
  )
};

export default ThemeTogglerButton;