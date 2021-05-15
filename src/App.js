import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme/theme';
import DetailsPage from 'components/DetailsPage/DetailsPage';
import UserPage from 'components/UserPage/UserPage';

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={UserPage} />
        <Route path="/:id" component={DetailsPage} />
      </Switch>
    </ThemeProvider>
  </Router>
);

export default App;
