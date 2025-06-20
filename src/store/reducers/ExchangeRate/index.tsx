import { createSlice } from '@reduxjs/toolkit';
import { IExchangeRateState } from '@/store/reducers/ExchangeRate/types';
import { getExchangeRateAsync } from '@/store/actions/ExchangeRate';

const initialState: IExchangeRateState = {
  loading: false,
  error: null,
  rate: null,
};

const exchangeRateSlice = createSlice({
  name: 'EXCHANGE_RATE_SLICE',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExchangeRateAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getExchangeRateAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.rate = action.payload;
      })
      .addCase(getExchangeRateAsync.rejected, (state, action) => {
        state.rate = null;
        state.loading = false;
        state.error = action.payload ?? action.error.message ?? 'Unknown error';
      });
  },
});

export default exchangeRateSlice.reducer;
