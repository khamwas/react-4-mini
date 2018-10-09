import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            {routes}
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
