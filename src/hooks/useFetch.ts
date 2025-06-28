import { useEffect, useReducer } from 'react';

type State<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

type Action<T> =
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: T }
  | { type: 'FETCH_FAILURE'; payload: string };

function fetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function useFetch<T>(url: string) {
  const [state, dispatch] = useReducer(fetchReducer as React.Reducer<State<T>, Action<T>>, {
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;
    dispatch({ type: 'FETCH_INIT' });

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json() as Promise<T>;
      })
      .then(json => {
        if (isMounted) dispatch({ type: 'FETCH_SUCCESS', payload: json });
      })
      .catch(err => {
        if (isMounted) dispatch({ type: 'FETCH_FAILURE', payload: err.message });
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
}
