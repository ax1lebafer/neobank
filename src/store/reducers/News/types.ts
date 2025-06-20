import { IResponseNewsDTO } from '@/types/newsTypes';

export interface INewsState {
  loading: boolean;
  error: string | null;
  news: IResponseNewsDTO | null;
}
