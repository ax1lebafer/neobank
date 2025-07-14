import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '@/services/axiosInstance';
import { IPrescoringFormValues } from '@components/Loan/PrescoringForm/types';
import { IPrescoringResponseDTO } from '@/types/loan';

export const postPrescoringAsync = createAsyncThunk<
  IPrescoringResponseDTO[],
  IPrescoringFormValues,
  { rejectValue: string }
>('loan/postPrescoring', async (arg, thunkAPI) => {
  try {
    const response = await apiClient.post<IPrescoringResponseDTO[]>(
      '/application',
      arg
    );

    return response.data;
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return thunkAPI.rejectWithValue('Unknown error');
  }
});
