import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Landing from './components/layout/Landing'
import Alert from './components/layout/alert'
import Dashboard from './components/dashboard/dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
//Redux
import { Provider } from 'react-redux'
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken'
import './App.css';

if(localStorage.token){
  setAuthToken(localStorage.token)
}
const App = () =>{

  useEffect(()=>{
    store.dispatch(loadUser())
  },[])
  
  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <PrivateRoute exact path="/Dashboard" component={Dashboard} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
)};
export default App;
