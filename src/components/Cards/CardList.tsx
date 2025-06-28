import { memo, useState, useEffect, useMemo } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { CardData, RawCard } from '../../types/post';
import { Card } from './Card';
import { Feature } from './Feature';
import infoImage from '/images/info-image.png';
import styles from './CardList.module.css';

export interface CardListProps {
  limit?: number;
}

const DEFAULT_CARD_LIMIT = 3;

export const CardList = memo(function CardList({ limit = DEFAULT_CARD_LIMIT }: CardListProps): React.ReactElement {
  const {
    data: rawCards,
    loading,
    error,
  } = useFetch<RawCard[]>(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
  const [activeIdx, setActiveIdx] = useState(0);

  const cards: CardData[] = useMemo(
    () =>
      rawCards
        ? rawCards.map(item => ({
            id: item.id,
            title: item.title,
            body: item.body,
            image: infoImage,
          }))
        : [],
    [rawCards],
  );

  const handlers: Array<() => void> = useMemo(() => cards.map((_, idx) => () => setActiveIdx(idx)), [cards]);

  useEffect(() => {
    if (!loading && rawCards) {
      const maxIdx = rawCards.length - 1;
      if (activeIdx > maxIdx) {
        setActiveIdx(maxIdx >= 0 ? maxIdx : 0);
      }
    }
  }, [rawCards, loading, activeIdx]);

  if (loading && (!rawCards || rawCards.length === 0)) {
    return <p className={styles.status}>Загрузка</p>;
  }

  if (error) {
    return <p className={styles.status}>Ошибка: {error}</p>;
  }

  if (!rawCards || rawCards.length === 0) {
    return <p className={styles.status}>Нет карточек</p>;
  }

  const safeIdx = Math.min(activeIdx, cards.length - 1);

  return (
    <div className={styles.cardList}>
      <div className={styles.cardDisplay}>
        <Card data={cards[safeIdx]} />
      </div>
      <div className={styles.featuresSlider}>
        {cards.map((card, i) => (
          <Feature key={card.id} data={card} active={i === safeIdx} onClick={handlers[i]} />
        ))}
      </div>
    </div>
  );
});
