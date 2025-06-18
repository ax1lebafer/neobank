import { Greetings } from '@components/Home/Greetings';
import { Features } from '@components/Home/Features';
import { ExchangeRate } from '@components/Home/ExchangeRate';
import { AboutService } from '@components/Home/AboutService';
import { Subscribe } from '@components/Home/Subscribe';
import { News } from '@components/Home/News';

export const HomePage = () => {
  return (
    <>
      <Greetings />
      <Features />
      <ExchangeRate />
      <AboutService />
      <News />
      <Subscribe />
    </>
  );
};
