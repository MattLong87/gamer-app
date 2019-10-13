import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Grid from './components/Grid';
import ProfilePage from './components/ProfilePage';
import './css/reset.css';
import './css/styles.css';

function App() {

  let profiles = [
    {
      name: "Matt",
      lastOnline: "2 hours",
      distance: '0.6 mi'
    },
    {
      name: "Steven",
      lastOnline: "6 hours",
      distance: '4.2 mi'
    },
    {
      name: "Jonathan",
      lastOnline: "2 days",
      distance: '.5 mi'
    },
    {
      name: "Matt",
      lastOnline: "2 hours",
      distance: '0.6 mi'
    },
    {
      name: "Steven",
      lastOnline: "6 hours",
      distance: '4.2 mi'
    },
    {
      name: "Jonathan",
      lastOnline: "2 days",
      distance: '.5 mi'
    },
    {
      name: "Matt",
      lastOnline: "2 hours",
      distance: '0.6 mi'
    },
    {
      name: "Steven",
      lastOnline: "6 hours",
      distance: '4.2 mi'
    },
    {
      name: "Jonathan",
      lastOnline: "2 days",
      distance: '.5 mi'
    }
  ];

  return (
    <Router>
      <Switch>
        <Route path="/profile" component={ProfilePage} />
        <Route path="/">
            <Grid profiles={profiles} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
