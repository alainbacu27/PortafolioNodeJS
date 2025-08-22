const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Sirve archivos estáticos desde la carpeta 'css'
app.use('/css', express.static(path.join(__dirname, 'css')));

// Sirve archivos estáticos desde la carpeta 'static'
app.use('/static', express.static(path.join(__dirname, 'static')));

// Sirve el archivo HTML en la ruta raíz ('/')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});