import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducer";
import thunk from "redux-thunk";
import { PeoplePage } from "./pages/PeoplePage/PeoplePage";
import { PlanetsPage } from "./pages/PlanetsPage/PlanetsPage";
import { StarshipsPage } from "./pages/StarshipsPage/StarshipsPage";

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/people">
              <PeoplePage />
            </Route>
            <Route path="/planets">
              <PlanetsPage />
            </Route>
            <Route path="/starships">
              <StarshipsPage />
            </Route>
            <Route path="/">
              <PeoplePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
