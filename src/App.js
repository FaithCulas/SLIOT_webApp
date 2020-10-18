import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Login/Login'
import Login from './Login/Login';
import { Navbar } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Navbar color="blue" variant="dark">
      SnapIT
      </Navbar>
      <Login/>
    </div>
  );
}

export default App;
