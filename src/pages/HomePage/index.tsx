import { Greetings } from '@components/Home/Greetings';
import { Features } from '@components/Home/Features';
import { ExchangeRate } from '@components/Home/ExchangeRate';

export const HomePage = () => {
  return (
    <>
      <Greetings />
      <Features />
      <ExchangeRate />
    </>
  );
};
