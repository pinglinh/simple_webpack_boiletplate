import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';

const App = () => (
  <Router>
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js').then(registration => {
      console.log('Service worker has been successfully registed.', registration);
    }).catch(error => {
      console.error('Service worker has not been successfully registered. ', error);
    });
  });
}