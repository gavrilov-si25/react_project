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
        <h1 className={styles.title}>
          Candidates with Creative & <br /> Engineering Backgrounds
        </h1>
        <p className={styles.text}>
          This is the place to show yourself and land entry level jobs at cutting-edge companies. Launch your career
          here.
        </p>
        <Link to="/" className={styles.cta}>
          Join Now
        </Link>
        <p className={styles.text}>
          Looking for candidates?{' '}
          <Link to="/" className={styles.link}>
            Hire now
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
