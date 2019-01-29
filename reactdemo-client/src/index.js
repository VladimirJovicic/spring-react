import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import userReducer from './store/reducers/userReducer';
import sectionReducer from './store/reducers/sectionReducer';
import articleReducer from './store/reducers/articleReducer';
import commentReducer from './store/reducers/commentReducer'

axios.interceptors.request.use(request => {
    request.headers = {
        ...request.headers,
        Authorization: localStorage.getItem('token')
    }
    return request;
})

const rootReducer = combineReducers({
    user: userReducer,
    section: sectionReducer,
    article: articleReducer,
    comments: commentReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));
serviceWorker.unregister();
