import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'

@connect(
	// 你要state什么属性放到paops里
	state => ({num: state}),
	// 你要什么方法， 放到props里，自动dispatch
	{ addGun, removeGun, addGunAsync }
)
class App extends React.Component {
	render () {
		console.log(this.props)
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

export default App
