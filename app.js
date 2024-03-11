// app.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware per servire file statici dalla cartella 'public'
app.use(express.static('public'));

// Imposta il motore di rendering Pug
app.set('view engine', 'pug');

// Rotte
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/profili', (req, res) => {
  res.render('profili');
});

app.get('/profili/:persona', (req, res) => {
  const persona = req.params.persona;
  res.render('persona', { persona });
});

// Avvio del server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
