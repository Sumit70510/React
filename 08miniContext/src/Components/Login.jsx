import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext';

export default function Login() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const {setUser} = useContext(UserContext);
  const handleSubmit = (e)=>
   {
    e.preventDefault()
    setUser({username,password});
   };  
  return (
    <div style={{ display: "flex", 
        alignSelf : 'center',
        alignItems:'center' ,
        flexDirection : 'column',
        // border : 'solid',
        // bordercolor : 'white',
        // width : 'fit-content'
     }}>
        
     <h2>Login</h2>
       <span 
         style={{alignSelf : 'start',}}
         >
        Username
       </span>
      <input type ='text'
        value = {username}
        onChange = {(e)=>{setUsername(e.target.value)}}
        placeholder = 'username' 
        />
       <span
        style={{alignSelf : 'start',}}
        >
        Password  
       </span>
      <input type = 'password'
        value = {password}
        onChange = {(e)=>{setPassword(e.target.value)}}
        placeholder='password'
      />
      <button onClick={handleSubmit}
        style={{width : '100%',
            height : '2vw',
            alignSelf: 'center',
            paddingTop : '0px'
        }}
      >
       submit 
      </button> 
    </div>
  )
}
