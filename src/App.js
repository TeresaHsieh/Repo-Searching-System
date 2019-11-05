import React from "react";
import Home from "./component/Home";
import Search from "./component/Search";
import NotFound from "./component/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ResetStyle, GlobalStyle } from "./component/globalStyle";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
