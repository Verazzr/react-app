import React from 'react'
import logoImg from './avatar.jpg'
import './logo.css'

class Logo extends React.Component {
	render () {
		return (
			<div className='logo-container'>
				<img className='logoImg' src={logoImg}></img>
			</div>
		)
	}
}

export default Logo
