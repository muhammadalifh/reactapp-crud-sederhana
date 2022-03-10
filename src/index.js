import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Variable from './belajar_react_js_dasar/Variable';
// import StateProps from './belajar_react_js_dasar/StateProps';
// import Map from './belajar_react_js_dasar/Map';
// import Lifecycle from  './belajar_react_js_dasar/Lifecycle';
import Crud from './crud';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Variable />
    <StateProps />
    <Map />
    <Lifecycle /> */}
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
