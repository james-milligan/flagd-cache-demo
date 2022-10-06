import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {FlagdWebProvider} from './flagd-web/src/index'
import { OpenFeature } from '@openfeature/js-sdk';

OpenFeature.setProvider(new FlagdWebProvider({
  host: "localhost",
  port: 80,
  tls: false,
  cache: true,
  cacheMaxBytes: 10000,
  cacheTTL: 10,
  maxRetries: 3,
  prefix: "/flagd",
}))
const client = OpenFeature.getClient("amazing-banner-demo");
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App client={client}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
