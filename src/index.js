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

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {}
const store = createStore(counter, compose(
	applyMiddleware(thunk),
	reduxDevtools
))

function Erying () {
	return <h2>二营</h2>
}

function Qibinglian () {
	return <h2>骑兵连</h2>
}

class Test extends React.Component {
	render () {
		console.log(this.props)
		return <h2>404 {this.props.location.pathname}</h2>
	}
}

ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<ul>
					<li>
						<Link to='/'>一营</Link>
					</li>
					<li>
						<Link to='/erying'>二营</Link>
					</li>
					<li>
						<Link to='/qibinglian'>骑兵连</Link>
					</li>
				</ul>
				<Switch>
					<Route path='/' exact component={App}></Route>
					<Route path='/erying' component={Erying}></Route>
					<Route path='/qibinglian' component={Qibinglian}></Route>
					<Route path='/:location' component={Test}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)
