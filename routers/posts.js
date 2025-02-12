const express = require('express')
const router = express.Router();
const posts = require('../data/posts');

// index
router.get('/', function(req, res) {
    res.send('Lista dei posts');
});
// show
router.get('/:id', function(req, res) {
    res.send('Dettagli del post' + req.params.id);
});
// store
router.post('/', function(req, res) {
    res.send('Creazione nuovo post');
});
// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale dei posts ' + req.params.id);
      });
// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale dei posts ' + req.params.id);
      });
// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
      })
      
module.exports = router;