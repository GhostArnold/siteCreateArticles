import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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

export const autorization = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.json({
        message: 'Такого пользователя не существует',
      });
    }
    // Сравниваем введённый пароль с паролем из базы, который зашифрован
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.json({
        message: 'Введённый пароль неверный',
      });
    }

    // Создаём JWT-токен с id пользователя, используя секретный ключ и задавая срок действия токена
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '30d' } // Токен будет действовать 30 дней
    );

    res.json({
      token,
      user,
      message: 'Вы вошли в систему',
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: 'Произошла ошибка при авторизации',
    });
  }
};

export const getMe = async (req, res) => {
  try {
    // Ищем пользователя в базе данных по идентификатору, который пришел в запросе (req.id)
    const user = await User.findById(req.id);

    if (!user) {
      return res.json({
        message: 'Такого пользователя не существует',
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '30d' } // Токен будет действовать 30 дней
    );

    res.json({
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: 'Нет доступа',
    });
  }
};
