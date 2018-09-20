import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { Provider  } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';


const store = createStore(reducers,{},applyMiddleware(reduxThunk));


ReactDOM.render(
<Provider store={store}><App /></Provider>, 
document.getElementById('root'));

// console.log("react key is" + process.env.REACT_APP_STRIPE_KEY)