import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '@/services/axiosInstance';
import { IPrescoringFormValues } from '@components/Loan/FormStepsSection/PrescoringForm/types';
import { IPrescoringResponseDTO } from '@/types/loan';
import { IS_OFFER_ACCEPTED } from '@/constants/localStorageKeys';
import { IScoringPayload } from '@/store/actions/Loan/types';
import { IApplicationDTO } from '@/types/application';

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

export const applyOfferAsync = createAsyncThunk<
  void,
  IPrescoringResponseDTO,
  { rejectValue: string }
>('loan/applyOffer', async (arg, thunkAPI) => {
  try {
    const response = await apiClient.post('/application/apply', arg);

    return response.data;
  } catch (error: unknown) {
    localStorage.removeItem(IS_OFFER_ACCEPTED);

    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return thunkAPI.rejectWithValue('Unknown error');
  }
});

export const sendScoringAsync = createAsyncThunk<
  void,
  IScoringPayload,
  { rejectValue: string }
>('loan/sendScoring', async (args, thunkAPI) => {
  const { id, ...rest } = args;

  try {
    const response = await apiClient.put(
      `/application/registration/${id}`,
      rest
    );

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return thunkAPI.rejectWithValue('Unknown error');
  }
});

export const getApplicationById = createAsyncThunk<
  IApplicationDTO,
  string,
  { rejectValue: string }
>('loan/getApplicationById', async (id, thunkAPI) => {
  try {
    const response = await apiClient.get<IApplicationDTO>(
      `/admin/application/${id}`
    );

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return thunkAPI.rejectWithValue('Unknown error');
  }
});

export const agreePaymentScheduleAsync = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>('loan/agreePaymentSchedule', async (id, thunkAPI) => {
  try {
    const response = await apiClient.post(`/document/${id}`);

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return thunkAPI.rejectWithValue('Unknown error');
  }
});
