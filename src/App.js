import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Grid from './components/Grid';
import ProfilePage from './components/ProfilePage';
import Chat from './components/Chat';
import EditProfile from './components/EditProfile';
import './css/reset.css';
import './css/styles.css';
//import faker from 'faker';

function App() {

  //array containing profiles (will be in redux state in future)
  let profiles = []

  //randomly picks from placeholder profiles to fill the profiles array
  // for (let i=0; i < 40; i++){
  //   let fakeProfile = {};
  //   fakeProfile.name = faker.name.firstName();
  //   fakeProfile.lastOnline = Math.floor(Math.random() * 6 + 1) + ' days';
  //   fakeProfile.distance = Math.floor(Math.random() * 15 + 1) +' mi';
  //   fakeProfile.photo = faker.image.avatar();
  //   profiles.push(fakeProfile);
  // }

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
