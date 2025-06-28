import { memo, useState, useEffect, useMemo } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { CardData, RawCard } from '../../types/post';
import { Card } from './Card';
import { Feature } from './Feature';
import infoImage from '/images/info-image.png';
import heroImage from '/images/hero-image.png';
import styles from './CardList.module.css';

export interface CardListProps {
  limit?: number;
}

const DEFAULT_CARD_LIMIT = 3;
const USE_LOCAL = true;

const localCards: CardData[] = [
  {
    id: 1,
    title: 'Интересные вебинары',
    body: '12 онлайн-занятий в месяц. Тёплая и уютная атмосфера на вебинарах. Все занятия доступны в записи с таймкодами',
    image: infoImage,
  },
  {
    id: 2,
    title: 'Удобная платформа',
    body: 'Все необходимое в одном месте: расписание, домашние задания, записи занятий, материалы, тренажёры заданий ЕГЭ, подробная статистика',
    image: heroImage,
  },
  {
    id: 3,
    title: 'Полезные материалы',
    body: 'Дополнительные учебники не понадобятся — мы даем всю необходимую теорию. К каждому занятию ученики получают скрипт и конспект',
    image: infoImage,
  },
  {
    id: 4,
    title: 'Умный тренажёр',
    body: '16 домашних заданий в месяц с детальной проверкой, пробники ЕГЭ ежемесячно, подробные и понятные комментарии к проверенным работам',
    image: heroImage,
  },
];

export const CardList = memo(function CardList({ limit = DEFAULT_CARD_LIMIT }: CardListProps) {
  const fetchUrl = USE_LOCAL ? '' : `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`;
  const { data: rawCards, loading, error } = useFetch<RawCard[]>(fetchUrl);

  const [activeIdx, setActiveIdx] = useState(0);

  const cards: CardData[] = useMemo(() => {
    if (USE_LOCAL) {
      return Array.from({ length: limit }, (_, i) => {
        const template = localCards[i % localCards.length];
        return { ...template, id: i + 1 };
      });
    }
    if (rawCards) {
      return rawCards.map(item => ({
        id: item.id,
        title: item.title,
        body: item.body,
        image: infoImage,
      }));
    }
    return [];
  }, [rawCards, limit]);

  const handlers = useMemo(() => cards.map((_, idx) => () => setActiveIdx(idx)), [cards]);

  useEffect(() => {
    if (!USE_LOCAL && !loading && rawCards) {
      const maxIdx = rawCards.length - 1;
      setActiveIdx(prev => (prev > maxIdx ? (maxIdx >= 0 ? maxIdx : 0) : prev));
    }
  }, [rawCards, loading]);

  if (!USE_LOCAL) {
    if (loading && (!rawCards || rawCards.length === 0)) {
      return <p className={styles.status}>Загрузка...</p>;
    }
    if (error) {
      return <p className={styles.status}>Ошибка: {error}</p>;
    }
    if (!rawCards || rawCards.length === 0) {
      return <p className={styles.status}>Нет карточек</p>;
    }
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
