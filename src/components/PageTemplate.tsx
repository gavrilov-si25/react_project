import type { ReactNode } from 'react';
import { Header } from './Header/Header';
import type { HeaderProps } from './Header/Header';
import { Join } from './Join/Join';
import { Footer } from './Footer/Footer';

interface PageTemplateProps extends HeaderProps {
  children?: ReactNode;
}

export const PageTemplate = ({ onLoginClick, onSignUpClick, children }: PageTemplateProps): React.ReactElement => {
  return (
    <>
      <Header onLoginClick={onLoginClick} onSignUpClick={onSignUpClick} />
      {children}
      <Join />
      <Footer />
    </>
  );
};
