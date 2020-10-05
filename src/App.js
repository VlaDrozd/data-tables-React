import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PeoplePage } from "./pages/PeoplePage/PeoplePage";

function App() {

  
  return (
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <PeoplePage />
        </Router>
      </div>
  );
}

export default App;
