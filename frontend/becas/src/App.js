import './App.css';
import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Homepage from './component/Homepage';
import Guestsignup from './components/signupGuest';
import Login from './components/Login'
import Index from './components/index';
import RootDashboard from './components/RootDashboard';
import GuestDashboard from './components/GuestDashboard';
import {RPrivateRoute} from './private/PrivateRoute'


class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/guest/register/" component={Guestsignup}/>
          <Route exact path="/guest/login/" component={Login}/>
          <RPrivateRoute exact path="/guest/dashboard/"  component={GuestDashboard} />
          <RPrivateRoute exact path="/root/dashboard/"  component={RootDashboard} />
         </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
