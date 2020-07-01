import React, {useState} from 'react'

const ThemeInput = () => {
    // This input should use the current theme
    const [inputValue, setInputValue] = useState('')
    return (
        <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
        />
    )
}

export default ThemeInput

