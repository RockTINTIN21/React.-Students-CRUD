import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import studentController from './controllers/studentController.js';

const app = express();
const port = 3000;

// Определение пути __dirname в ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'style.css'));
});
app.get('/client.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'client.js'));
});
app.use(studentController.app);
studentController.addToRepo();

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}, сайт доступен по ссылке: http://localhost:${port}/`);
});
