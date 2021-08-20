import React from 'react'
import "./App.css"
import NavAndSidebar from "./navbar/NavAndSidebar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavAndSidebar />
    </Router>
  );
}

export default App
