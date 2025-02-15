/*

Bonus
Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
Milestone 1
Per iniziare, andiamo su Postman e prepariamo una nuova chiamata verso la nostra rotta store.
Impostiamo il verbo e l’endpoint corretti
Selezioniamo il tab body e scegliamo il formato raw e JSON
Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post
Nota: se vogliamo avere delle immagini, inventiamole pure.
Nota: ricordiamo che non bisogna passare l’id quando si crea una nuova risorsa: sarà il server (con l’aiuto del database) a fornirlo.
Milestone 2
Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.
Poi, all’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un console.log
Milestone 3
Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.
Testiamolo con postman.
Milestone 4
Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse.
Bonus
Quelli del giorno prima, se non già fatti
In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
*/

const express = require('express') 
const app = express() 
const port = 3000 
const postsRouter = require('./routers/posts')


app.get("/", (req, res) => {
     res.send(`Hello world`);
  });

  app.use("/posts", postsRouter)

app.listen(port, () => {   
    console.log(`Example app listening on port ${port}`)
  })