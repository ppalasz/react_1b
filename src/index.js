import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyRouter from './my-router.js';
import { CookiesProvider } from 'react-cookie';


ReactDOM.render(<CookiesProvider><MyRouter /></CookiesProvider>, document.getElementById('root'));


