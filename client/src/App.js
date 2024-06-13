import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        {/* Define your routes inside the Routes component */}
        <Routes>
          {/* Define each route using the Route component */}
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/login" component={Login} />
          <Route exact path="/signup" element={<Signup />} />
          {/* Define a catch-all route for paths that don't match */}
          {/* <Route component={NotFound} /> */}
        </Routes>
      </div>
    </Router>

    // <div className="App">
    //   <h1>JWT Authentication</h1>
    //   <Signup />
    //   <Login />
    // </div>
  );
}

export default App;
