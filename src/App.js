import Blogs from "./components/Blogs/Blogs";
import Post from "./components/Post/Post";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogsData } from "./utils/data";
import { useContext } from 'react';
import { ThemeContext } from "./components/Themes/ThemeContext";
function App() {
  const { theme, toggleTheme, themes } = useContext(ThemeContext);
  return (
    <div
      className="App"
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor  ,fontFamily: theme.fontFamily  }}
    >
      <div className="menu">
        {Object.keys(themes).map((themeName) => (
          <div key={themeName} className="menu-item" onClick={() => toggleTheme(themeName)}>
           {themes[themeName].name}
            <img src={themes[themeName].backgroundImage} alt={themes[themeName].name} />
          </div>
        ))}
      </div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Blogs post={BlogsData} theme = {theme} />} />
          <Route exact path="/post/:id" element={<Post post={BlogsData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
