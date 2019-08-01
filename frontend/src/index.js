import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import rootReducer from './store/reducers/index';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
    composeEnhances(
        applyMiddleware(thunk)
    )
);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();