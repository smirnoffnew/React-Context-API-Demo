import React from 'react'

export const themes = {
    light: {
        background: '#eee',
        color: '#222'
    },
    dark: {
        background: '#222',
        color: '#eee'
    },
    sky: {
        background: 'cornflowerblue',
        color: '#222'
    }
}

export const ThemeContext = React.createContext({
    theme: themes.light,
    selectTheme: () => {}
})