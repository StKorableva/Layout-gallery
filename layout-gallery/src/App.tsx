import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.scss';
import Header from "./components/header/index.";
import Example1 from "./components/example_1";
import Example2 from "./components/example_2";
import Example3 from "./components/example_3";

function App() {
  return (
          <Router>
              <div className="App">
                  <Header/>
                  <Switch>
                      <Route path="/" exact>
                          <Example1 />
                      </Route>
                      <Route path="/example2">
                          <Example2 />
                      </Route>
                      <Route path="/example3">
                          <Example3 />
                      </Route>
                  </Switch>
              </div>
          </Router>
  );
}

export default App;
