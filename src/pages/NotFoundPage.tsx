import { PageTemplate } from '../components/PageTemplate';
import { Error } from '../components/Error/Error';

type NotFoundPageProps = React.ComponentProps<typeof PageTemplate>;

export const NotFoundPage = ({ onLoginClick, onSignUpClick }: NotFoundPageProps): React.ReactElement => (
  <PageTemplate onLoginClick={onLoginClick} onSignUpClick={onSignUpClick}>
    <Error />
  </PageTemplate>
);
