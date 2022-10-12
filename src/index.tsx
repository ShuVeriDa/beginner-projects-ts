import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.scss';
import {Counter} from "./projects/Counter/Counter";
import { Quiz } from './projects/Quiz/Quiz';
import {UsersInvite} from "./projects/Users/UsersInvite";


const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
  root.render(
    <React.StrictMode>
      <Quiz />
    </React.StrictMode>,
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



