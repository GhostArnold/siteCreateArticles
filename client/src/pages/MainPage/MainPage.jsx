import rocksFogSeaDusk from '../../img/header.jpg';
import styles from './MainPage.module.scss';
const MainPage = () => {
  return (
    <div>
      <header>
        <img src={rocksFogSeaDusk} alt="" className={styles.headBgc} />
      </header>
      <h1>Main page</h1>
    </div>
  );
};

export default MainPage;
