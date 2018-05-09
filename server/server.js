const express = require('express')
const userRouter = require('./user')

const app = express()

app.use('/user', userRouter)  // 使用中间件

app.listen(9093, () => {
	console.log('node app')
})
