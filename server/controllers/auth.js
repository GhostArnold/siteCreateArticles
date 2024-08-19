import bcrypt from 'bcryptjs';
import token from 'jsonwebtoken';
import User from '../models/User.js';

export const register = async (req, res) => {
  try {
    // Делаем деструкторизацию логина и пароля и равняем к body
    const { username, password } = req.body;

    // Ищем логин
    const isUsed = await User.findOne({ username });
    // Если нашли, то мы не сможем его зарегистрировать
    if (isUsed) {
      return res.json({
        message: 'Такой пользователь уже существует',
      });
    }
    // Генерим соль
    const salt = await bcrypt.genSalt(10);
    // Создаём хэш код из соли и введёного пароля для записи в базу
    const hashCode = await bcrypt.hash(password, salt);
    // Делаем переменную в которую добавляем нового юзера
    const newUser = new User({
      username,
      password: hashCode,
    });
    // Сохраняем пользователя в базе
    await newUser.save();

    res.json({
      message: 'Пользователь успешно зарегистрирован',
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: 'Ошибка при создании пользователя',
    });
  }
};

export const autorization = async () => {};
