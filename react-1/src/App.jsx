import React from 'react'
import Card from  './components/card.jsx'
import Navbar from './components/Navbar.jsx'


const App = () => {

  const user = "Harsh Mishra"
  const age = 34 ;

  return (
    <div>
      {/* <h1>Hello Guys I am {user}</h1>
      <h2>I am {age} years old</h2> */}
      <Navbar/>
      <Navbar/>
      <Card/>
      <Card/>
      
       
    </div>

  ) 
}

export default App