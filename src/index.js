import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleWare } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const defaultReview = {feeling: '', understanding: '', support: '', comments: ''};

const reviewToAdd = (state = defaultReview, action) => {
    if(action.type === 'SET_FEELING_RATING') {
        return {...state, feeling: action.payload.feeling};
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        reviewToAdd,
    }),
    applyMiddleWare(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
