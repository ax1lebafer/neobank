import { Greetings } from '@components/Home/Greetings';
import { Features } from '@components/Home/Features';
import { ExchangeRate } from '@components/Home/ExchangeRate';
import { AboutService } from '@components/Home/AboutService';
import { Subscribe } from '@components/Home/Subscribe';

export const HomePage = () => {
  return (
    <>
      <Greetings />
      <Features />
      <ExchangeRate />
      <AboutService />
      <Subscribe />
    </>
  );
};
