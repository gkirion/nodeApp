var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var categories = require('../model/categories')
var app = require('../app')

router.get('/myapp', (req, res) => res.send('got / get request'))
router.post('/myapp', (req, res) => res.send('got / post request'))
router.put('/myapp', (req, res) => res.send('got / put request'))
router.delete('/myapp', (req, res) => res.send('got / delete request'))
router.get('/category', (req, res) => categories.load(res))
module.exports = router;
