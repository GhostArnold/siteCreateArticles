import jwt from 'jsonwebtoken';

export const checkAuth = (req, res, next) => {
  const token = (req.headers.autorization || '').replace(/Beaber/, '');

  if (token) {
    try {
      // Расшифровываем токен
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //   Вшиваем айдишник в наш реквест
      req.userId = decoded.id;

      next();
    } catch (error) {
      console.error(error);
      res.json({
        message: 'Нет доступа',
      });
    }
  } else {
    console.error(error);
    res.json({
      message: 'Нет доступа',
    });
  }
};
