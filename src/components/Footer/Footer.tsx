import { Link } from 'react-router';
import styles from './Footer.module.css';
import logo2Image from '/images/logo2.png';

export const Footer = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={logo2Image} alt="Jobly Logo" className={styles.logo} />
          <p className={styles.text}>We support a pool of diverse young creatives and engineers.</p>
          <p className={styles.text}>© 2023 Jobly.co Copyright and All rights reserved.</p>
        </div>
        <div className={styles.right}>
          <Link to="/" className={styles.link}>
            Terms and Conditions
          </Link>
          <Link to="/" className={styles.link}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
