import { SliderTemplate } from '../SliderTemplate';
import styles from './Slider.module.css';
import heroImage from '/images/hero-image.png';
import infoImage from '/images/info-image.png';

const AUTOPLAY_MS = 7000;

export const Slider = (): React.ReactElement => {
  const slides = [
    { src: heroImage, alt: 'Hero', className: styles.image },
    { src: infoImage, alt: 'Info', className: styles.image },
  ];

  return (
    <section className={styles.slider}>
      <h3 className={styles.title}>Единый тариф для всех</h3>
      <p className={styles.text}>Всё включено — без доплат. Мы продумали всё для комфортного старта в учёбе.</p>
      <div className={styles.sliderArea}>
        <SliderTemplate
          images={slides}
          autoplayDelay={AUTOPLAY_MS}
          loop
          spaceBetween={0}
          className={styles.container}
        />
      </div>
    </section>
  );
};
