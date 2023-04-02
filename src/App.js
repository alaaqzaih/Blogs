import Blogs from "./components/Blogs/Blogs";
import Post from "./components/Post/Post";
import React from 'react' ; 
import './App.css'
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom'
import { BlogsData } from "./utils/data";
function App() {
  return ( 
    <Router>
       <Routes>
        <Route exact path="/" element={ < Blogs post = {BlogsData } /> } /> 
        <Route exact path="/post/:id" element={  <Post post={BlogsData} /> } /> 
      </Routes>
    </Router>
  )
}
export default App
