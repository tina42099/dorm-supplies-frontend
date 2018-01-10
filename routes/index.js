const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../app/models/config');

router.get('/', (req, res, next) => {
    return res.render('index');
})

router.post('/register', (req, res, next) => {
	request.post({
		url: config.apiUrl + '/users',
		form: req.body
	}).pipe(res)
})

router.get('/add_item', (req, res, next) => {
    return res.render('addItem');
})

router.post('/add_item', (req, res, next) => {
	request.post({
		url: config.apiUrl + '/items',
		form: req.body
	}).pipe(res)
})

// router.get('/items', (req, res, next) => {
//     request.get({ url: config.apiUrl + '/items' }, (req, res, next) => {
// 		console.log(res)
// 		return res.render('items', {
//     	items: res.json
// 		})
// 	})
// })

module.exports = router;
