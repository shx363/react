import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App';
import {BrowserRouter,Route} from 'react-router-dom'


import './assets/css/css.css'
import './assets/css/animate.css'


import store from './store';
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
   <BrowserRouter>
     <Route component={App}/>
   </BrowserRouter>
  </Provider>
   , 
 document.getElementById('root'));
