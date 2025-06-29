import { Link } from 'react-router';
import styles from './Header.module.css';
import logoImage from '/images/logo.png';

export interface HeaderProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

export const Header = ({ onLoginClick, onSignUpClick }: HeaderProps): React.ReactElement => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logoImage} alt="Jobly Logo" className={styles.logoImg} />
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Направления
          </Link>
          <button onClick={onSignUpClick} className={`${styles.linkb} ${styles.signUp}`}>
            Вводный урок
          </button>
          <button onClick={onLoginClick} className={`${styles.linkb} ${styles.logIn}`}>
            Войти
          </button>
        </nav>
      </div>
    </header>
  );
};
