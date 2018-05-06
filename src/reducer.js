import { combineReducers } from 'redux'

import { auth } from './Auth.redux'
import { counter } from './index.redux'

const reducers = combineReducers({
	auth,
	counter
})

export default reducers
