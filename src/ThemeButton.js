import React from 'react'
import AppContext from './context';

const ThemeButton = ({text}) => {
    // This button should use the current theme
    return (
        <AppContext.Consumer >
            {(context) => (
                <button style={context.theme}>{text}</button>
            ) }
        </AppContext.Consumer>
    )
}

export default ThemeButton
