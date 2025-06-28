import { useReducer, useCallback } from 'react';

export enum ModalMode {
  Login = 'login',
  Register = 'register',
}

type ModalAction = { type: 'OPEN'; mode: ModalMode } | { type: 'CLOSE' };

type ModalState = {
  mode: ModalMode | null;
};

function modalReducer(state: ModalState, action: ModalAction): ModalState {
  switch (action.type) {
    case 'OPEN':
      return { ...state, mode: action.mode };
    case 'CLOSE':
      return { ...state, mode: null };
    default:
      return state;
  }
}

export function useModal() {
  const [state, dispatch] = useReducer(modalReducer, { mode: null });

  const openLogin = useCallback(() => dispatch({ type: 'OPEN', mode: ModalMode.Login }), []);
  const openRegister = useCallback(() => dispatch({ type: 'OPEN', mode: ModalMode.Register }), []);
  const close = useCallback(() => dispatch({ type: 'CLOSE' }), []);

  return {
    mode: state.mode,
    isOpen: state.mode !== null,
    openLogin,
    openRegister,
    close,
  };
}
