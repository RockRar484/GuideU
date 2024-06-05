import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>JWT Authentication</h1>
      <Signup />
      <Login />
    </div>
  );
}

export default App;
