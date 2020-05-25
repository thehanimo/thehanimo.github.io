import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import * as routes from "./constants/routes";

import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path={routes.Home} component={Home} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
