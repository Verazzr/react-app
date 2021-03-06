import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
	BrowserRouter,
	Route,
 	Redirect,
	Switch,
} from 'react-router-dom'
import Login from './container/login/login'
import Register from './container/register/register'
import reducers from './reducer'
import './config'
import './index.css'
import AuthRoute from './component/authroute/authroute'


const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {}
const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	reduxDevtools
))

function Boss () {
	return <h2>Boss</h2>
}

ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRoute></AuthRoute>
				<Route path='/boss' component={Boss}></Route>
				<Route path='/login' component={Login}></Route>
				<Route path='/register' component={Register}></Route>
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)
