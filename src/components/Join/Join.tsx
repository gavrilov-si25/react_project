import { Link } from 'react-router';
import styles from './Join.module.css';
import jobImage from '/images/job-image.png';

export const Join = (): React.ReactElement => (
  <section className={styles.join}>
    <div className={styles.content}>
      <div className={styles.text}>
        <h2 className={styles.title}>
          Set up your profile. <br /> Let jobs find you.
        </h2>
        <Link to="/cards" className={styles.button}>
          Join Now
        </Link>
      </div>
      <img src={jobImage} alt="Join" className={styles.image} />
    </div>
  </section>
);
