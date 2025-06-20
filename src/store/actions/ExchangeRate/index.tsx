import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchExchangeRate } from '@/services/exchangeApi';
import { IResponseRateDTO } from '@/types/exchangeRateTypes';

export const getExchangeRateAsync = createAsyncThunk<
  IResponseRateDTO,
  { base: string },
  { rejectValue: string }
>('exchangeRate/getRate', async ({ base }, thunkAPI) => {
  try {
    return await fetchExchangeRate({ base });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return thunkAPI.rejectWithValue('Unknown error');
  }
});
