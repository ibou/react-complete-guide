import React, { Component } from "react";

import "./App.css";  
import List from "./components/List/List"; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Animation</h1>  
        <button className="Button">Open Modal</button>
        <h3>Animation lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
