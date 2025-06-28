import { Link } from 'react-router';
import styles from './Footer.module.css';
import logo2Image from '/images/logo.svg';

export const Footer = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={logo2Image} alt="Jobly Logo" className={styles.logo} />
          <p className={styles.text}>Готовим к ЕГЭ эффективно и с душой. Наши ученики поступают в топовые вузы.</p>
          <p className={styles.text}>© 2025 ТУРБО ЕГЭ. Онлайн-школа, которой доверяют.</p>
        </div>
        <div className={styles.right}>
          <Link to="/" className={styles.link}>
            Курсы ОГЭ
          </Link>
          <Link to="/" className={styles.link}>
            Курсы ЕГЭ
          </Link>
        </div>
      </div>
    </footer>
  );
};
