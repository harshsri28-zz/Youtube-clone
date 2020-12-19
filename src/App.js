import React from 'react';
import './App.css';
import Header from './Header';
import Recommeded from './Recommeded';
import Sidebar from './Sidebar';
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />


        <Switch>
          <Route path="/search/:searchTerm">
            {/* <Header /> */}
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>


          <Route path="/">
            {/* <Header /> */}
            <div className="app__page">
              <Sidebar />
              <Recommeded />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
