import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux';
import configureStore from './js/redux/configureStore';

const store = configureStore({});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
