import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import RootStore from './stores/root';

const root = new RootStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider {...root}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

