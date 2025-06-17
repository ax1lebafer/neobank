import { IResponseRateDTO } from '@/types/exchangeRateTypes';
import axios from 'axios';

interface IFetchRateParams {
  base: string;
}

export const fetchExchangeRate = async ({
  base,
}: IFetchRateParams): Promise<IResponseRateDTO> => {
  const API_KEY: string = import.meta.env.VITE_EXCHANGE_API_KEY;

  if (!API_KEY) {
    throw new Error('Missing API key');
  }

  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${base}`;

  const response = await axios.get<IResponseRateDTO>(url);

  if (response.data.result !== 'success') {
    throw new Error(response.data['error-type']);
  }

  return response.data;
};
