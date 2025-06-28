import { Link } from 'react-router';
import styles from './Join.module.css';
import jobImage from '/images/job-image.png';

export const Join = (): React.ReactElement => (
  <section className={styles.join}>
    <div className={styles.content}>
      <div className={styles.text}>
        <h2 className={styles.title}>Запишитесь на вводный урок. Это бесплатно.</h2>
        <Link to="/cards" className={styles.button}>
          Записаться на урок
        </Link>
      </div>
      <img src={jobImage} alt="Join" className={styles.image} />
    </div>
  </section>
);
