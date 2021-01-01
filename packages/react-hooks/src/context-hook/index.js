import React, { useState, useContext, createContext } from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = createContext(themes.light);

export const Message = () => {
  // useContext must be called directly from React as a workaround for mocking to work
  const { foreground, background } = React.useContext(ThemeContext)
  return (
    <span style={{ backgroundColor: background, color: foreground, padding: '8px' }}>
      This is the theme context in action!
    </span>
  );
}

export const Button = ({ onClick }) => {
  return (
    <ThemeContext.Consumer>
      {
        (props) => (
          <button onClick={onClick} style={{
            backgroundColor: props.foreground,
            color: props.background,
            padding: '8px'
          }}>
            Switch Theme
          </button>
        )
      }
    </ThemeContext.Consumer>
  );
}

export const ContextHook = () => {
  const [themeType, setThemeType] = useState("dark")
  const toggleTheme = () => {
    setThemeType(themeType === "dark" ? "light" : "dark");
  }
  return (
    <>
      <h2>Context Hook</h2>
      <ThemeContext.Provider value={themes[themeType]}>
        <Message/>
        <Button onClick={toggleTheme}/>
      </ThemeContext.Provider>
    </>
  );
};