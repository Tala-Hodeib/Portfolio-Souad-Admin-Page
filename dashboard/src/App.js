import logo from './logo.svg';
import Login from "./Login.js";
import Menu_bar from './components/Menu_bar';
import './App.css';
import Nav from './components/Nav';
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';


{/*function App() {
  return (
    <div className="App">
     
      <Nav/>
    </div>
  );
}

export default App;*/}


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/home'  component={Home} />
          <Route path='/about' component={About} />
          <Route path='/experiences' component={Experience} />
          <Route path='/skills' component={Skills} />
          <Route path='/contact' component={Contact} />


          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
