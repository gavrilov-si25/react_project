import { memo } from 'react';
import { CardData } from '../../types/post';
import styles from './Feature.module.css';

export interface FeatureProps {
  data: CardData;
  active: boolean;
  onClick: () => void;
}

const FeatureComponent = ({ data, active, onClick }: FeatureProps): React.ReactElement => {
  return (
    <div className={`${styles.feature} ${active ? styles.featureActive : ''}`} onClick={onClick}>
      <h4 className={styles.featureTitle}>{data.title}</h4>
      <p className={styles.featureText}>{data.body}</p>
    </div>
  );
};

export const Feature = memo(FeatureComponent);
