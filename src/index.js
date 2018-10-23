import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@babel/polyfill';
import App from './app';
import widApp from './rootReducer';

let store = createStore(
	widApp,
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
)