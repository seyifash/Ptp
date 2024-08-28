import React , {useState, createContext} from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const [isLoggedIn, setLoggedIn] = useState(false);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    const LogInUser = () => {
        console.log('i have been called')
        setLoggedIn(true);
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, isLoggedIn, LogInUser}} > 
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider};