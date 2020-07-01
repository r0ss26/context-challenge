import React, {useState} from 'react'
import AppContext from './context'

const ThemeInput = () => {
    // This input should use the current theme
    const [inputValue, setInputValue] = useState('')
    return (
        <AppContext.Consumer>
            {context => (
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    style={context.theme}
                />
            )}
        </AppContext.Consumer>
    )
}

export default ThemeInput

