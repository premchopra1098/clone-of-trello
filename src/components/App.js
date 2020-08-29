import "../styles/App.css";

import React, { Component } from "react";
import Board from "./Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header"> Trello-Personal Board </div>

        <Board />
      </div>
    );
  }
}

export default App;