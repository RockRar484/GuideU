import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        {/* Define your routes inside the Switch component */}
        <Switch>
          {/* Define each route using the Route component */}
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/Signup" component={Signup} />
          {/* Define a catch-all route for paths that don't match */}
          <Route component={NotFound} />
        </Switch>
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
