import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



import NavBar from './components/NavBar';
import Product from './components/Product';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';






class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/product/:category' component={Product} />
            <Route path='/product' component={Product} />

          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
