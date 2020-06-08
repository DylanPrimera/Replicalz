import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Principal from './principal/principal'
import Hombre from './hombre/hombre'
import Mujer from './mujer/mujer'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
  <Router>
     <div>
      <Switch>
 
         {/* Páginas */}
         <Route exact path='/' component={Principal} />
         <Route path='/hombre' component={Hombre} />
         <Route path='/mujer' component={Mujer} />
      </Switch>
     </div>
    </Router>,
  document.getElementById('root')
);