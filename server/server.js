import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/auth.js';
// Переменная для взаимодействия с севрером express
const app = express();
// Подключаем библиотеку для взаимодействия с переменными средами
dotenv.config();
app.use(cors());

// Извлекаем из env
const port = parseInt(process.env.PORT);

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/api/auth/', router);
async function start() {
  // Если всё проходит успешно, то мы подключаемся к БД и запускаем сервер
  try {
    await mongoose.connect('mongodb://localhost:27017/articleWebsite');
    app.listen(port, () => {
      console.log(`Server was launched success on port ${port}`);
    });
  } catch (error) {
    console.error(error + 'При запуске сервера произошла ошибка');
  }
}
start();
