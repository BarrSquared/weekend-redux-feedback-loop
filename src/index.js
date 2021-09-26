import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';




const defaultReview = {feeling: '', understanding: '', support: '', comments: ''};

const reviewToAdd = (state = defaultReview, action) => {
    if(action.type === 'SET_FEELING_RATING') {
        console.log('In index.js, updating feeling, ');
        return {...state, feeling: action.payload.feeling};
    } else if(action.type === 'SET_UNDERSTANDING_RATING') {
        console.log('In index.js, updating understanding.');
        return {...state, understanding: action.payload.understanding};
    }
    return state;
}

const reduxStore = createStore(
    combineReducers(
        {
        reviewToAdd,
        }
    ),
    // applyMiddleWare(logger)
);

ReactDOM.render(
    <React.StrictMode> 
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'));
registerServiceWorker();
