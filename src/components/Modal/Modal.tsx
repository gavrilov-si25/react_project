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
          <h2 className={styles.title}>{mode === 'login' ? 'Login' : 'Register'}</h2>

          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            id="name"
            type="text"
            className={styles.input}
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: MIN_NAME_LENGTH,
                message: `The name must contain at least ${MIN_NAME_LENGTH} characters.`,
              },
            })}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}

          {mode === 'register' && (
            <>
              <label htmlFor="email" className={styles.label}>
                Email:
              </label>
              <input
                id="email"
                type="email"
                className={styles.input}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email format',
                  },
                })}
              />
              {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </>
          )}

          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            id="password"
            type="password"
            className={styles.input}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: MIN_PASSWORD_LENGTH,
                message: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`,
              },
            })}
          />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}

          <div className={styles.buttons}>
            <button type="submit" className={styles.primary} disabled={isSubmitting}>
              {isSubmitting
                ? mode === 'login'
                  ? 'Logging in...'
                  : 'Registering...'
                : mode === 'login'
                  ? 'Log in'
                  : 'Register'}
            </button>
            <button type="button" onClick={onClose} className={styles.secondary}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
