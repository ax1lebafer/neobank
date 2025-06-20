import { createAsyncThunk } from '@reduxjs/toolkit';
import { IResponseNewsDTO } from '@/types/newsTypes';
import { fetchNews, IFetchNewsParams } from '@/services/newsApi';

export const getNewsAsync = createAsyncThunk<
  IResponseNewsDTO,
  IFetchNewsParams,
  { rejectValue: string }
>('news/getNews', async (arg, thunkAPI) => {
  try {
    return await fetchNews(arg);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('Unknown error');
  }
});
