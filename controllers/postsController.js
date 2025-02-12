const posts = require('../data/posts'); 

//creo le funzioni delle operazioni CRUD con la loro logica
// index
function index(req, res) {
    res.json(posts);
}
// show
function show(req, res) {
    res.send('Dettagli del post' + req.params.id);
}
// store
function store(req, res) {
    res.send('Creazione nuovo post');
}
// update
function update(req, res) {
    res.send('Modifica integrale dei posts ' + req.params.id);
}
// modify
function modify(req, res) {
    res.send('Modifica parziale dei posts ' + req.params.id);
};
// destroy
function destroy(req, res) {
    res.send('Eliminazione del post ' + req.params.id);
}

module.exports = { index, show, store, update, modify, destroy }