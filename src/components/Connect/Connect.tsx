import styles from './Connect.module.css';
import connectImage from '/images/connect-image.png';

export const Connect = (): React.ReactElement => {
  return (
    <section className={styles.connect}>
      <div className={styles.content}>
        <img src={connectImage} alt="Connect" className={styles.image} />
        <div className={styles.text}>
          <h3 className={styles.title}>Удобство обучения</h3>
          <p className={styles.description}>
            Все необходимые материалы будут в личном кабинете: расписание, онлайн-занятия и их видеозаписи, конспекты,
            домашние задания, общение с преподавателем, статистика и многое другое.
          </p>
        </div>
      </div>
    </section>
  );
};
