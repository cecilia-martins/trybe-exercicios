import React from "react";
import TvList from "./components/TvList";
import "./App.css";

class App extends React.Component {
  render() {
  
    return (
      <main>
        <h1>🍿 Fantástica Fábrica - Séries</h1>
        < TvList />
      </main>
    );
  }
}

export default App;
