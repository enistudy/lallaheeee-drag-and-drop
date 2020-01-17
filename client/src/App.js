import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyles';
import { Home, NotMatch } from './pages';

const App = () => (
  <Router>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotMatch} />
    </Switch>
  </Router>
);

export default App;
