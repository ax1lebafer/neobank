import axios from 'axios';
import { IResponseNewsDTO } from '@/types/newsTypes';

interface IFetchNewsParams {
  category?:
    | 'business'
    | 'entertainment'
    | 'general'
    | 'health'
    | 'science'
    | 'sports'
    | 'technology';
  language?: string;
  country?: string;
}
export const fetchNews = async ({
  category = 'business',
  language = 'en',
  country = 'us',
}: IFetchNewsParams) => {
  const API_KEY: string = import.meta.env.VITE_NEWS_API_KEY;

  if (!API_KEY) {
    throw new Error('Missing API key');
  }

  const response = await axios.get<IResponseNewsDTO>(
    'https://newsapi.org/v2/top-headlines',
    {
      params: {
        apiKey: API_KEY,
        country,
        category,
        language,
      },
    }
  );

  console.log(response);

  if (response.data.status !== 'ok') {
    throw new Error(response.data.message);
  }

  return response.data;
};
