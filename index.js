// import React from 'react';
// import ReactDOM from 'react-dom';
// //import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, { Component } from 'react';
import { render } from 'react-dom';
import { withScriptjs } from "react-google-maps";
import Map from './Map';
import './style.css';

const App = () => {
  const MapLoader = withScriptjs(Map);

  return (
    <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA5TInLLqSnVSS6eWY15PETv-GKustc1jw"
      loadingElement={<div style={{ height: `100%` }} />}
    />
  );
};

render(<App />, document.getElementById('root'));
