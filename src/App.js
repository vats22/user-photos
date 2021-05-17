
import React from 'react';
import Navbar from './Navbar';
import User from './User';
import Photos from './Photos';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Switch,Route} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={User}/>
      <Route path="/photos" component={Photos }/>
    </Switch>
  </React.Fragment>
  );
}

export default App;
