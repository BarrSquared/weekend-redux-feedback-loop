import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';


const defaultReview = {feeling: 0, understanding: 0, support: 0, comments: ''};

const reviewToAdd = (state = defaultReview, action) => {
    if(action.type === 'SET_FEELING_RATING') {
        console.log('In index.js, updating feeling.');
        return {...state, feeling: action.payload};
    } else if(action.type === 'SET_UNDERSTANDING_RATING') {
        console.log('In index.js, updating understanding.');
        return {...state, understanding: action.payload};
    } else if(action.type === 'SET_SUPPORT_RATING') {
        console.log('In index.js, updating support.');
        return {...state, support: action.payload};
    } else if(action.type === 'SET_COMMENT') {
        console.log('In index.js, updating comment.');
        return{...state, comments: action.payload};
    }
    return state;
}

const reduxStore = createStore(
    combineReducers(
        {
        reviewToAdd,
        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(
    <React.StrictMode> 
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'));
registerServiceWorker();
