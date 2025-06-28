import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from './useFetch';

type TestData = { foo: string };

describe('useFetch hook', () => {
  const url = '/test-endpoint';
  const mockData: TestData = { foo: 'bar' };

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation((input: RequestInfo) => {
      if (input === url) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData),
        } as Response);
      }
      return Promise.resolve({
        ok: false,
        statusText: 'Not Found',
      } as Response);
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('инициализируется с loading=true, data=null, error=null', async () => {
    const { result } = renderHook(() => useFetch<TestData>(url));
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();
    await waitFor(() => expect(result.current.loading).toBe(false));
  });

  it('при успешном запросе устанавливает data и сбрасывает loading', async () => {
    const { result } = renderHook(() => useFetch<TestData>(url));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
    expect(global.fetch).toHaveBeenCalledWith(url);
  });

  it('при ошибке запроса устанавливает error', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error('Network error')));

    const { result } = renderHook(() => useFetch<TestData>(url));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe('Network error');
  });
});
