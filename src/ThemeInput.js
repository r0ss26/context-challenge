import React, {useState} from 'react'
import AppContext from './context'

const ThemeInput = () => {
    return (
        <AppContext.Consumer>
            {context => (
                <input
                    type="text"
                    value={context.inputValue}
                    onChange={e => context.setInputValue(e.target.value)}
                    style={context.theme}
                />
            )}
        </AppContext.Consumer>
    )
}

export default ThemeInput

