import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search/:searchTerm">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
            {/* SearchPage */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
