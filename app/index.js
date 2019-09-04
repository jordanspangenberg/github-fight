import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Popular from "./components/Popular";
import Battle from "./components/Battle";

// Component
// State
// Lifecycle
// UI
// Windows + . to get emoji keyboard 🤣

// Separation of Concerns!

class App extends React.Component {
  render() {
    return (
      <div>
        <Popular />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
