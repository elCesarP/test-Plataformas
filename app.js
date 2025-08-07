const express = require('express');
const app = express();
const port = 9000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta GET
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

// Ruta POST
app.post('/message', (req, res) => {
  const { message } = req.body;
  if (message) {
    res.status(200).send({ message });
  } else {
    res.status(400).send({ error: 'No message provided' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app; // Exportamos la app para las pruebas
