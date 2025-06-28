import { PageTemplate } from '../components/PageTemplate';
import { Hero } from '../components/Hero/Hero';
import { Quote } from '../components/Quote/Quote';
import { Info } from '../components/Info/Info';
import { Connect } from '../components/Connect/Connect';
import { Slider } from '../components/Slider/Slider';

type HomePageProps = React.ComponentProps<typeof PageTemplate>;

export const HomePage = ({ onLoginClick, onSignUpClick }: HomePageProps): React.ReactElement => (
  <PageTemplate onLoginClick={onLoginClick} onSignUpClick={onSignUpClick}>
    <Hero />
    <Quote />
    <Info />
    <Connect />
    <Slider />
  </PageTemplate>
);
