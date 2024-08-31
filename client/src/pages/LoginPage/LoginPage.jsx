import { Link } from 'react-router-dom';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.form}>
          <div className={styles.inputData}>
            <label htmlFor="username">
              Login:
              <input type="text" name="username" />
            </label>
            <label htmlFor="password">
              Password:
              <input type="password" name="password" />
            </label>
          </div>
          <div className={styles.loginAndReg}>
            <button>Войти</button>
            <Link to="/register">Нет аккаунта?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
