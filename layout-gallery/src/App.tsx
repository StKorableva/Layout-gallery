import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.scss';
import Header from "./components/header/index.";
import Example1 from "./components/example_1";

function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <Switch>
                  <Route path="/">
                      <Example1 />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
