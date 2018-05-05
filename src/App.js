import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'

class App extends React.Component {
	// constructor (props) {
	// 	super(props)
	// }

	render () {
		const num = this.props.num
		const addGun = this.props.addGun
		const removeGun = this.props.removeGun
		const addGunAsync = this.props.addGunAsync
		return (
			<div>
				<h1>现在有机枪{num}把</h1>
				<button onClick={addGun}>申请武器</button>
				<button onClick={removeGun}>上交武器</button>
				<button onClick={addGunAsync}>拖俩天再提交武器</button>
			</div>
		)
	}
}
const mapStatetoProps = (state) => {
	return {
		num: state
	}
}

const actionCreator = { addGun, removeGun, addGunAsync }

App = connect(mapStatetoProps, actionCreator)(App)
export default App
