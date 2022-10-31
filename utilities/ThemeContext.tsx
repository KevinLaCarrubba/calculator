import { createContext, useEffect, useState, useCallback } from 'react'

interface AppContextInterface {
    darkMode: boolean
    setDarkMode: Function
}

interface Props {
    children: JSX.Element
}

export const ThemeContext = createContext<AppContextInterface>({
    darkMode: false,
    setDarkMode: () => null
})

const ThemeProvider = ({ children }: Props) => {
    const [darkMode, setDarkMode] = useState<boolean>(false)
    const contextValue: AppContextInterface = { darkMode, setDarkMode }

    const changeTheme = useCallback(() => {
        if (darkMode) {
            return document
                .querySelector('html')
                ?.setAttribute('data-theme', 'DARK')
        } else {
            return document
                .querySelector('html')
                ?.setAttribute('data-theme', 'LIGHT')
        }
    }, [darkMode])
    useEffect(() => {
        changeTheme()
    }, [changeTheme])
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
