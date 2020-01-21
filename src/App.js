import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Components/Post';
import Postform from './Components/Postform';
import Login from  './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import {Provider} from 'react-redux';
import store from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <Postform />
          <br/> 
          <Post /> */}
          {/* <Login /> */}
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
