import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import './App.css';
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router className='container'>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/> 
        </Switch>
      </Router>
    
     );
  }
}
 
export default App;