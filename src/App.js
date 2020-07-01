import React, {useState} from 'react'
import AppContext from './context'
import {themes} from './context'
import Form from './Form'
import ThemeTogglerButtom from './ThemeTogglerButton';

const App = () => {

    const [theme, setTheme] = useState(themes.dark);
    
    const themeToggler = () => {
        if (theme === themes.dark) {
            setTheme(themes.light);
        } else if (theme === themes.light) {
            setTheme(themes.ocean);
        } else {
            setTheme(themes.dark);
        }
    }

    return (
        <AppContext.Provider value={{theme, themeToggler}}>
            <Form />
            <ThemeTogglerButtom />
        </AppContext.Provider>
    )
}

export default App
