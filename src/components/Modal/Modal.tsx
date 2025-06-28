import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './Modal.module.css';

export interface ModalProps {
  onClose: () => void;
  mode: 'login' | 'register';
}

interface ModalFormValues {
  name: string;
  email?: string;
  password: string;
}

const MIN_NAME_LENGTH = 2;
const MIN_PASSWORD_LENGTH = 6;

export const Modal = ({ onClose, mode }: ModalProps): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ModalFormValues>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<ModalFormValues> = async data => {
    if (mode === 'login') {
      console.log('Login data:', { name: data.name, password: data.password });
    } else {
      console.log('Register data:', data);
    }
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <h2 className={styles.title}>{mode === 'login' ? 'Вход' : 'Необходимо зарегистрироваться'}</h2>

          <label htmlFor="name" className={styles.label}>
            Имя:
          </label>
          <input
            id="name"
            type="text"
            className={styles.input}
            {...register('name', {
              required: 'Имя обязательно',
              minLength: {
                value: MIN_NAME_LENGTH,
                message: `Имя должно содержать не менее ${MIN_NAME_LENGTH} символов.`,
              },
            })}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}

          {mode === 'register' && (
            <>
              <label htmlFor="email" className={styles.label}>
                Почта:
              </label>
              <input
                id="email"
                type="email"
                className={styles.input}
                {...register('email', {
                  required: 'Почта обязательна',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Неверно указана почта',
                  },
                })}
              />
              {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </>
          )}

          <label htmlFor="password" className={styles.label}>
            Пароль:
          </label>
          <input
            id="password"
            type="password"
            className={styles.input}
            {...register('password', {
              required: 'Пароль обязателен',
              minLength: {
                value: MIN_PASSWORD_LENGTH,
                message: `Пароль должен содержать не менее ${MIN_PASSWORD_LENGTH} символов`,
              },
            })}
          />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}

          <div className={styles.buttons}>
            <button type="submit" className={styles.primary} disabled={isSubmitting}>
              {isSubmitting
                ? mode === 'login'
                  ? 'Вход...'
                  : 'Регистрация...'
                : mode === 'login'
                  ? 'Войти'
                  : 'Зарегистрироваться'}
            </button>
            <button type="button" onClick={onClose} className={styles.secondary}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
