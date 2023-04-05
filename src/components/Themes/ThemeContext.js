import { createContext, useState } from 'react';
export const ThemeContext = createContext();
const themes = {
  light: {
    name: 'Light',
    backgroundColor: 'white',
    backgroundImage: 'https://img.myloview.com/stickers/light-mode-black-glyph-ui-icon-daytime-theme-adjust-screen-brightness-user-interface-design-silhouette-symbol-on-white-space-solid-pictogram-for-web-mobile-isolated-vector-illustration-700-312410921.jpg',
    textColor: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  dark: {
    name: 'Dark',
    backgroundImage: 'data:image/png;base64,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',
    backgroundColor: '#333',
    textColor: 'black',
    headerColor: 'white',
    searchButton: '#333',
    fontFamily:  'Alkatra , cursive ' ,
  },
  blue: {
    name: 'Blue',
    backgroundImage: 'https://png.pngtree.com/element_our/sm/20180410/sm_5acd1797b5783.jpg',
    backgroundColor: '#90bdf1',
    textColor: 'blue',
    headerColor: 'white',
    searchButton: 'blue',
    fontFamily:  'Titillium Web, sans-serif ' ,
  },
  pink: {
    name: 'Pink',
    backgroundImage: 'https://www.pngkit.com/png/full/116-1161233_love-pink-logo-png-ville-de-saint-etienne.png',
    backgroundColor: '#ec94d2',
    textColor: '#c9058e',
    headerColor: 'white',
    searchButton: '#c9058e',
    fontFamily:  'Lobster, cursive ' ,
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = (themeName) => {
    setTheme(themes[themeName]);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

