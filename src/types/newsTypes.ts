export interface IResponseNewsDTO {
  status: 'ok' | 'error';
  code?: string;
  message?: string;
  totalResults?: number;
  articles?: INewsData[];
}

export interface INewsData {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}
