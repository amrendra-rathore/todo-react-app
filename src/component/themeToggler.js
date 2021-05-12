import React, { useContext } from 'react';
import { ThemeContext } from './context';

const ThemeToggler = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const handleThemeToggle = (e) => {
        e.preventDefault();
        setTheme(theme === 'light'? 'dark' : 'light');
      }

    return(
        <button style={{width: "60px", height: "60px"}} variant="contained" color="secondary" className="themetoggler" onClick={handleThemeToggle}>
            <span style={{fontSize: "45px"}} role="img" aria-label="switch theme">
               {theme === 'light'? '🌞' : '🔅'}
            </span>
        </button>
    )
}

export default ThemeToggler;