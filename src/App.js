import React from 'react';
import './styling/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
// import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
          {/* <Route exact path='/services' component={Services} /> */}
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/skills' component={Skills} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
