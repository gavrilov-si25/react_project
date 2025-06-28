import { renderHook, act } from '@testing-library/react';
import { useModal, ModalMode } from './useModal';

describe('useModal hook', () => {
  it('по умолчанию закрыт', () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.isOpen).toBe(false);
    expect(result.current.mode).toBeNull();
  });

  it('openLogin открывает модалку в режиме login', () => {
    const { result } = renderHook(() => useModal());
    act(() => {
      result.current.openLogin();
    });
    expect(result.current.isOpen).toBe(true);
    expect(result.current.mode).toBe(ModalMode.Login);
  });

  it('openRegister открывает модалку в режиме register', () => {
    const { result } = renderHook(() => useModal());
    act(() => {
      result.current.openRegister();
    });
    expect(result.current.isOpen).toBe(true);
    expect(result.current.mode).toBe(ModalMode.Register);
  });

  it('close закрывает модалку', () => {
    const { result } = renderHook(() => useModal());
    act(() => {
      result.current.openLogin();
      result.current.close();
    });
    expect(result.current.isOpen).toBe(false);
    expect(result.current.mode).toBeNull();
  });
});
