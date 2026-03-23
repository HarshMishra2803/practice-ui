import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./components/home.jsx";
import Harsh from "./components/harsh.jsx";



const App = () => {
  return (
    <div>
      <h1>This is Navbar</h1>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/harsh" element={<Harsh/>}/>
      </Routes>
    </div>
  )
}

export default App