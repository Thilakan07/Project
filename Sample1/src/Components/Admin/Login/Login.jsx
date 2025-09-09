import React, { useState } from 'react';
import './Login.css';

const Login = () =>{
 

  return (
    <div className="login-container">
      <form className="login-form" >
        <h2>Login</h2>
        <label>Email</label>
        <input
          type="text"
          
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}


export default Login;