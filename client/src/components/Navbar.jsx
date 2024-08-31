import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const isAuth = false;
  return (
    <nav className={styles.navbar}>
      <div>
        <span className={styles.avatar}></span>
      </div>
      <div>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to={'/'}
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/posts'}
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              Добавить пост
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/add-post'}
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              Мои посты
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        {isAuth ? (
          <Link className={styles.logInBtn}>Выйти</Link>
        ) : (
          <Link to={'/login'} className={styles.logInBtn}>
            Войти
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
