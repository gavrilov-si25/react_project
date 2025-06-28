import { Link } from 'react-router';
import { CardList } from '../Cards/CardList';
import styles from './Info.module.css';

const CARD_LIST_LIMIT = 3;
const INFO_LINK_LIMIT = 10;

export const Info = (): React.ReactElement => (
  <section className={styles.info}>
    <h2 className={styles.title}>
      <Link to={`/cards?limit=${INFO_LINK_LIMIT}`} className={styles.titleLink}>
        Онлайн-школа, которой доверяют
      </Link>
    </h2>
    <CardList limit={CARD_LIST_LIMIT} />
  </section>
);
