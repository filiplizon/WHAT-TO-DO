import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme/theme';
import UserPage from 'views/UserPage/UserPage';
import ItemPage from 'views/ItemPage/ItemPage';
import Preloader from 'components/Preloader/Preloader';

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Switch>
        <React.Suspense fallback={<Preloader />}>
          <Route exact path="/WHAT-TO-DO" component={UserPage} />
          <Route path="/WHAT-TO-DO/:id" component={ItemPage} />
        </React.Suspense>
      </Switch>
    </ThemeProvider>
  </Router>
);

export default App;
