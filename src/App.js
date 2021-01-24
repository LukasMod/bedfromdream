import React from 'react';
import {
  Home,
  Results,
  PageNotFound,
  Header,
  Footer,
  Form,
} from './containers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ContextProvider from './context/ContextProvider';

import './App.scss';

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home />
              <Footer />
            </Route>
            <Route path="/cart" exact>
              <Header />
              <Results />
              <Footer />
            </Route>
            <Route path="/payment" exact>
              <Header />
              <Form />
              <Footer />
            </Route>
            <Route path="/page-not-found">
              <Home />
              <Footer />
              <PageNotFound path="/" />
            </Route>
            <Redirect to="page-not-found" />
          </Switch>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
