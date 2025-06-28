import { Link } from 'react-router';
import { SliderTemplate } from '../SliderTemplate';
import styles from './Hero.module.css';
import heroImage from '/images/hero-image.png';
import infoImage from '/images/info-image.png';

const AUTOPLAY_MS = 7000;

export const Hero = (): React.ReactElement => {
  const slides = [
    { src: heroImage, alt: 'Hero', className: styles.image },
    { src: infoImage, alt: 'Info', className: styles.image },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Гарантированная подготовка к ЕГЭ/ОГЭ или обучение — бесплатно</h1>
        <p className={styles.text}>
          Гарантированное поступление в вуз на бюджет — или мы вернем деньги. У нас есть все, чтобы ты смог
          подготовиться к ЕГЭ на максимум. Наша школа — одна из самых быстрорастущих онлайн-школ, где тебя не просто
          готовят к ЕГЭ — а ведут до поступления.
        </p>
        <Link to="/" className={styles.cta}>
          Получить консультацию
        </Link>
        <p className={styles.text}>
          Попробуй сейчас на бесплатном{' '}
          <Link to="/" className={styles.link}>
            вводном уроке
          </Link>
        </p>
        <div className={styles.gradient}>
          <SliderTemplate
            images={slides}
            autoplayDelay={AUTOPLAY_MS}
            loop
            spaceBetween={0}
            className={`${styles.swiper} swiper`}
          />
        </div>
      </div>
    </section>
  );
};
