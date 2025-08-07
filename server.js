import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve arquivos estáticos da raiz (mesma pasta do server.js)
app.use(express.static(__dirname));

// Rotas para as páginas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/pagina2', (req, res) => {
  res.sendFile(path.join(__dirname, 'pagina2.html'));
});

app.get('/pagina3', (req, res) => {
  res.sendFile(path.join(__dirname, 'pagina3.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
