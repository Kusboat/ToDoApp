import {createContext, useContext, useState} from 'react'

const ContextTheme = createContext();

export const ThemeContext = ({children}) => {
    const [dark, setMode] = useState(true);

    const themeHandler = () => setMode(prev => !prev)
  return (
    <ContextTheme.Provider value={{dark, themeHandler}}>
        {children}
    </ContextTheme.Provider>
  )
}

export const GetValue = () => useContext(ContextTheme);