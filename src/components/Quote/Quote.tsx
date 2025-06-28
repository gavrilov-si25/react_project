import styles from './Quote.module.css';
import maskImage from '/images/mask.png';
import avatarImage from '/images/avatar.png';

export const Quote = (): React.ReactElement => {
  return (
    <section className={styles.quote}>
      <div className={styles.content}>
        <img src={maskImage} alt="Quote Icon" className={styles.icon} />
        <div className={styles.author}>
          <img src={avatarImage} alt="Zhao Cui" className={styles.photo} />
          <blockquote className={styles.text}>
            <p>Не оставим наедине с трудностями.</p>
            <p>Поддержим, выслушаем, дадим совет. </p>
          </blockquote>
          <p className={styles.name}>Основатель онлайн-школы</p>
          <span className={styles.title}>
            Наша школа - настоящая семья. Поддержим, выслушаем, дадим совет. Также у нас есть вебинары с психологом о
            выгорании и бережной поддержке себя в этот непростой период.
          </span>
        </div>
      </div>
    </section>
  );
};
