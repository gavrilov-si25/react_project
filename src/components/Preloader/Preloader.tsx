import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

export interface PreloaderProps {
  isLoading: boolean;
}

const HIDE_DELAY_MS = 500;

export const Preloader = ({ isLoading }: PreloaderProps): React.ReactElement | null => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, HIDE_DELAY_MS);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${styles.preloader} ${!isLoading ? styles.hidden : ''}`}>
      <div className={styles.spinner} />
    </div>
  );
};
