import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App';
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../redux/reducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

it('renders without crashing', () => {
  const div = document.createElement('div');

  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
  ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, div);

  ReactDOM.unmountComponentAtNode(div);
});