import React from 'react';
import './styles/App.css'
import Home from './Home';
import Nav from './Nav';
import TVShows from './TVShows';
import Movies from './Movies';
import Popular from './Popular';
import MyList from './MyList';
import Footer from './Footer';
import { HashRouter as Router, Switch, Route  } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/tv' component={TVShows}/>
            <Route path='/movies' component={Movies}/>
            <Route path='/popular' component={Popular}/>
            <Route path='/mylist' component={MyList}/>
        </Switch>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
