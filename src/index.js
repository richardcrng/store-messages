import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

// Import F7 Bundle
import Framework7 from 'framework7/framework7.esm.bundle.js'

// Import Framework7 React
import Framework7React from 'framework7-react';

// Import F7 CSS
import 'framework7/css/framework7.bundle.min.css'

// Init plugin
Framework7.use(Framework7React)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
