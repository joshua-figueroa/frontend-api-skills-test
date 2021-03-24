import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecipesPage from "./pages/RecipesPage";
import RecipesDetailPage from "./pages/RecipesDetailPage";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <RecipesPage />
          </Route>

          <Route path="/view/:recipeID">
            <RecipesDetailPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
