import { memo } from 'react';
import { CardData } from '../../types/post';
import styles from './Card.module.css';

interface CardProps {
  data: CardData;
}

export const Card = memo(({ data }: CardProps): React.ReactElement => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{data.title}</h3>
      <p className={styles.cardDescription}>{data.body}</p>
      <img src={data.image} alt={data.title} className={styles.cardImage} />
    </div>
  );
});
