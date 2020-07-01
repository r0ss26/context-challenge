import React from 'react'

export const themes = {
    light: {
        color: 'black',
        background: 'white'
    },
    dark: {
        color: 'white',
        background: 'black'
    },
    ocean: {
        color: 'blue',
        background: 'grey'
    }
}

const AppContext = React.createContext()

export default AppContext;
