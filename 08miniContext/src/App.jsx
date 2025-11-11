import { useState } from 'react'
import UserContextProvider from './context/userContextProvider';
import Login from './Components/login';
import Profile from './Components/Profile';
import './App.css'

function App() {


  return (
    <UserContextProvider>
      <div
        style = {{
        display: "flex",
        flexDirection : 'column',
        justifyContent: "center",  // centers horizontally
        width: "100vw",  
        }}> 
       <h1>React with Chai and Share is Important</h1>
       <Login/>
       <Profile/>
      </div>
    </UserContextProvider>  
  )
}

export default App
