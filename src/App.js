import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import * as routes from "./constants/routes";

import Home from "./components/Home/Home";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path={routes.Home} component={Home} />
          </div>
        </BrowserRouter>
      </div>
    </ParallaxProvider>
  );
}

export default App;
