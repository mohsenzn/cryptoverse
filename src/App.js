import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Homepage from "./components/Homepage";
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage/>
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default App;
