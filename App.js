import React from "react";
import './App.css';
import Exp12 from "./Exp12";

const blogInfo = {
  React : {
    post : 'Learn useContext Hooks',
    author : 'xyz'
  },

  NodeJS:{
    post : 'Node Commands',
    author : 'XYZ'
  }
}

export const BlogContext = React.createContext(blogInfo);

function App() {
  return (
    <div className="App">
      <div>
        <h1>useContext() Demo</h1>
        <BlogContext.Provider value={blogInfo}><Exp12/></BlogContext.Provider>
      </div>
    </div>
  );
}
export default App;