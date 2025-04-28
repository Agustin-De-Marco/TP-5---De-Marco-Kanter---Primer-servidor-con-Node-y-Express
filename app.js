import express from 'express';
import { getHoraActual, getFechaCompleta } from './time.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hola, este es mi servidor de hora con Node.js y Express!');
});

app.get('/hora', (req, res) => {
  res.send(getHoraActual());
});

app.get('/fechaCompleta', (req, res) => {
  res.send(getFechaCompleta());
});

app.use((req, res) => {
  res.status(404).send('Error 404: Ruta no encontrada');
});

export default app;