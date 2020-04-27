import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import state from "./redux/state";
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
             <App state={state} />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));


