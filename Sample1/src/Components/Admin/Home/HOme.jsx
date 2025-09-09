import React from 'react';
import './HOme.css';

const HOme = ()=> {
  return (
    <div className="home-wrapper">
      <header className="home-header">
        <h1>Welcome to My Website</h1>
        <p>Explore, connect, and enjoy the experience.</p>
      </header>
      <main className="home-main">
        <button onClick={() => alert('Navigating to Login')}>Login</button>
        <button onClick={() => alert('Navigating to Features')}>Features</button>
        <button onClick={() => alert('Navigating to Contact')}>Contact Us</button>
      </main>
    </div>
  );
}

export default HOme;
