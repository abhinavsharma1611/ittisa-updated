import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Create from './components/Create';
import * as serviceWorker from './serviceWorker';
import Edit from './components/Edit';

import Show from './components/Show';

ReactDOM.render(
  <Router>
      <div>
        <Route path='/create' component={Create} />
        <Route exact path='/' component={App} />
        <Route path='/show/:id' component={Show} />
        <Route path='/edit/:id' component={Edit} />
        
        
      </div>
  </Router>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
