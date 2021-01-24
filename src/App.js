import React, { Suspense, lazy } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ContextProvider from './context/ContextProvider';

import './App.scss';

import { Header, Footer } from './containers';

const Home = lazy(() => import('./containers/Home/Home'));
const Results = lazy(() => import('./containers/Results/Results'));
const PageNotFound = lazy(() =>
  import('./containers/PageNotFound/PageNotFound')
);
const Form = lazy(() => import('./containers/Form/Form'));

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
                <Footer />
              </Suspense>
            </Route>
            <Route path="/cart" exact>
              <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Results />
                <Footer />
              </Suspense>
            </Route>
            <Route path="/payment" exact>
              <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Form />
                <Footer />
              </Suspense>
            </Route>
            <Route path="/page-not-found" exact>
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
                <Footer />
                <PageNotFound path="/" />
              </Suspense>
            </Route>
            <Redirect to="page-not-found" />
          </Switch>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
