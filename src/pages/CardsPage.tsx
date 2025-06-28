import { useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router';
import { PageTemplate } from '../components/PageTemplate';
import { CardHeader } from '../components/Cards/CardHeader';
import { CardList } from '../components/Cards/CardList';

type CardsPageProps = React.ComponentProps<typeof PageTemplate>;

const MIN_CARDS = 1;
const MAX_CARDS = 50;
const DEFAULT_CARDS = 10;

export const CardsPage = ({ onLoginClick, onSignUpClick }: CardsPageProps): React.ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const raw = parseInt(searchParams.get('limit') || '', 10);
  const initial = Number.isNaN(raw) ? DEFAULT_CARDS : raw;
  const limit = Math.min(MAX_CARDS, Math.max(MIN_CARDS, initial));

  useEffect(() => {
    if (initial !== limit) {
      setSearchParams({ limit: limit.toString() });
    }
  }, [initial, limit, setSearchParams]);

  const changeLimit = useCallback(
    (delta: number) => {
      const newLimit = Math.min(MAX_CARDS, Math.max(MIN_CARDS, limit + delta));
      setSearchParams({ limit: newLimit.toString() });
    },
    [limit, setSearchParams],
  );

  return (
    <PageTemplate onLoginClick={onLoginClick} onSignUpClick={onSignUpClick}>
      <CardHeader limit={limit} onAdd={() => changeLimit(1)} onRemove={() => changeLimit(-1)} />
      <CardList limit={limit} />
    </PageTemplate>
  );
};
