// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar caminho __dirname no ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pasta pública onde vão ficar os arquivos HTML, CSS, JS e imagens
app.use(express.static(path.join(__dirname, 'public')));

// Rota padrão - serve a página inicial (ex: index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rotas para as outras páginas
app.get('/pagina2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pagina2.html'));
});

app.get('/pagina3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pagina3.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});