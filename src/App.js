import "../src/scss/reset.scss";
import "../src/scss/App.scss";



import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { MainPage } from "./pages/MainPage/MainPage";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import {NotFound} from "./pages/NotFound/NotFound";

function App() {
  return (
    <React.Fragment>
      <Header />
        <BrowserRouter basename="test-task">
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route  path="/news/:id" component={NewsPage} />
            <Route path='*' component={NotFound} />
          </Switch>
        </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
