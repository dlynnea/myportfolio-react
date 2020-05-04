import React from 'react';
import './styling/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

function App() {
  return (
    <div style={{height: '100%'}}>
      <Router>
        <Header />
        <SideDrawer />
        <Backdrop />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/resume' component={Resume} /> */}
        </Switch>
        <Footer />
      </Router>
      </div>
  );
}

export default App;
