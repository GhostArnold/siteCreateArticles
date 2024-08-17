import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Переменная для взаимодействия с севрером express
const app = express();
// Подключаем библиотеку для взаимодействия с переменными средами
dotenv.config();

// Извлекаем из env
const port = process.env.PORT;

async function start() {
  // Если всё проходит успешно, то мы подключаемся к БД и запускаем сервер
  try {
    await mongoose.connect('mongodb://localhost:27017/');
    app.listen(port, () => {
      console.log(`Server was launched success on port ${port}`);
    });
  } catch (error) {
    console.error(error + 'При запуске сервера произошла ошибка');
  }
}
start();
