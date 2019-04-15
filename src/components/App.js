import React, { Component } from 'react';
import NavContainer from "../views/NavContainer"
import Modal from "./Modal"


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavContainer />
        <Modal />
      </div>
    );
  }
}

export default App;
