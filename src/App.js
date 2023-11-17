import React from "react";
import Weather from "./Weather";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Time Travel</h1>
        <Weather />
        <footer>
          <small>
            <a href="https://github.com/soniqmidd/TimeTravel" target="_blank">
              Open Source code
            </a>
            by Sonique Middleton
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
