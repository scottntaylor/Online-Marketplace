import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import cartReducer from '../src/components/Reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import * as serviceWorker from './serviceWorker';

const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
