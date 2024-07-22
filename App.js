import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DatePickers from './DatePickers';
import AllOtherComponents from './AllOtherComponents';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/date-pickers" component={DatePickers} />
        <Route path="/" component={AllOtherComponents} />
      </Switch>
    </Router>
  );
};

export default App;
