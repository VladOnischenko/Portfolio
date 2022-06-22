import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import MainComponent from "./components/MainComponent";
import { rootReducer } from './store/redusers'

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainComponent />
    </Provider>
  </React.StrictMode>
);

