const posts = require('../data/posts'); 

//creo le funzioni delle operazioni CRUD con la loro logica
// index
function index(req, res) {
    res.json(posts);
}
// show
function show(req, res) {
    //res.send('Dettagli del post' + req.params.id);
    // recupero il parametro dinamico che rappresenta l'id del post e lo converto in numero.
    const id = parseInt(req.params.id) 
     // cerco il post tramite id quindi utilizzo il metodo find
     const post = posts.find(post => post.id === id);
     // Restituisco il risultato sotto forma di JSON
     res.json(post);
    
    //cotrollo se l'id inserito è presente o meno 
    if (!post) {
        res.status(404)

       return res.json(
           {
               status: 404,
               error: "Not Found",
               message: "Post non trovato"
           }
       )
   }
    
}
// store
function store(req, res) {
    console.log(req.body);
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
    //res.send('Eliminazione del post ' + req.params.id);

    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id);
    // Piccolo controllo
    if (!post) {
         res.status(404)

        return res.json(
            {
                status: 404,
                error: "Not Found",
                message: "Post non trovato"
            }
        )
    }
    // Rimuovo il post utilizzando splice e indexof()
    posts.splice(posts.indexOf(post), 1);
    // Restituiamo lo status corretto
    res.sendStatus(204)
    
    console.log(posts)
}

module.exports = { index, show, store, update, modify, destroy }