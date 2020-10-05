import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from './store/reducer';
import thunk from "redux-thunk";

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
        <Navbar></Navbar>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
