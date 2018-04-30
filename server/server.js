const express = require('express')
const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
	console.log('mongo connect success')
})

// 类似于mysql的表 mongo里有文档，字段的概念
const User = mongoose.model('user', new mongoose.Schema({
	name: {
		type: String,
		require: true, // 指定该字段必须要有
	},
	age: {
		type: Number,
		require: true,
	}
}))

// 新增数据
// User.create({
// 	name: 'xiaohua',
// 	age: 26,
// }, function (err, doc) {
// 	if (!err) {
// 		console.log(doc)
// 	} else {
// 		console.log(err)
// 	}
// })

// 删除数据
// User.remove({ name: 'xiaohua', age: 26}, function (err, doc) {
// 	console.log(doc)
// })

// 更改数据
// User.update({
// 	'name': 'xiaoming'
// }, {
// 	'$set': { age: 18 }
// }, function (err, doc) {
// 	console.log(doc)
// })

const app = express()

app.get('/', (req, res) => {
	res.send('<h1>Hello World<h1/>')
})

app.get('/data', (req, res) => {
	// 查询数据
	User.findOne({ name: 'xiaoming' }, function (err, doc) {
		res.json(doc)
	})
})



app.listen(9093, () => {
	console.log('node app')
})
