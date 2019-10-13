import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Grid from './components/Grid';
import ProfilePage from './components/ProfilePage';
import Chat from './components/Chat';
import EditProfile from './components/EditProfile';
import './css/reset.css';
import './css/styles.css';

function App() {
  //placeholder profiles
  let profileExamples = [
    {
      name: "Matt",
      lastOnline: "2 hours",
      distance: '0.6 mi',
      photo: 'matt.jpg'
    },
    {
      name: "Steven",
      lastOnline: "6 hours",
      distance: '4.2 mi',
      photo: 'steven.jpg'
    },
    {
      name: "Jonathan",
      lastOnline: "2 days",
      distance: '.5 mi',
      photo: 'jon.jpg'
    }
  ];

  //array containing profiles (will be in redux state in future)
  let profiles = []

  //randomly picks from placeholder profiles to fill the profiles array
  for (let i=0; i < 40; i++){
    let randomNumber = Math.floor(Math.random() * profileExamples.length);
    profiles.push(profileExamples[randomNumber]);
  }

  return (
    <Router className="app">
      <Switch>
        <Route path="/profile" component={ProfilePage} />
        <Route path="/chat" component={Chat} />
        <Route path="/editProfile" component={EditProfile} />
        <Route path="/">
          <Grid profiles={profiles} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
