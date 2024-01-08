import React, { useState, useEffect, useContext } from 'react'
import themeContext from '../context/themeContext';

function TogglethemeBtn() {
      const [btnText, setBtnText] = useState("Dark Theme");
      const [themeMode, setThemeMode] = useState("light");

      const { theme, setTheme } = useContext(themeContext);

      function toggleTheme() {
            if (themeMode === "light") {
                  setThemeMode("dark");
                  setBtnText("Light Theme")
            }
            else {
                  setThemeMode("light");
                  setBtnText("Dark Theme")
            }
      }

      useEffect(() => {
            const htmlElement = document.querySelector('html');
            htmlElement.classList.remove("dark", "light");
            htmlElement.classList.add(themeMode);
      }, [themeMode])

      return (
            <label className="relative inline-flex items-center cursor-pointer">
                  <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        onChange={toggleTheme}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-slate-200">{btnText}</span>
            </label>
      )
}

export default TogglethemeBtn
