import React from "react";
import "../App.css";
import List from "./List";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">What's Happening?</h1>
        </header>

        <List />
      </div>
    );
  }
}

export default App;
