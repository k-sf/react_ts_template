import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StartScreen from 'screens/StartScreen';

const App: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <StartScreen />
    </Route>
  </Switch>
);

export default App;
