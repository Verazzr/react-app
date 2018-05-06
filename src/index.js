import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import {
	BrowserRouter,
	Route,
	Link,
 	Redirect,
	Switch,
} from 'react-router-dom'

import App from './App'
import { counter } from './index.redux'
import Auth from './Auth'
import reducers from './reducer'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {}
const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	reduxDevtools
))


ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
					<Route path='/' exact component={App}></Route>
					<Route path='/login' component={Auth}></Route>
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)
