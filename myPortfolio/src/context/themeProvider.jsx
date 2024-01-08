import React, { useState } from 'react'
import themeContext from './ThemeContext'

export default function themeContextProvider({ children }) {
      const [theme, setTheme] = useState("light");
      return (
            <themeContext.Provider value={{ theme, setTheme }}>
                  {children}
            </themeContext.Provider>
      )
}