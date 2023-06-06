import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider as StyletronProvider} from 'styletron-react';
import {DarkTheme, BaseProvider, styled} from 'baseui';
import {Client as Styletron} from 'styletron-engine-atomic';
import store from './store'
import { Provider } from 'react-redux'

const engine = new Styletron();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <StyletronProvider value={engine}>
    <BaseProvider theme={DarkTheme}>
      <Provider store={store}>
        <App />
      </Provider>
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
