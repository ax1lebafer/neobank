import { createSlice } from '@reduxjs/toolkit';
import { ILoanState } from '@/store/reducers/Loan/types';
import { postPrescoringAsync } from '@/store/actions/Loan';

const initialState: ILoanState = {
  error: null,
  loading: false,
  prescoring: null,
};

const loanSlice = createSlice({
  name: 'LOAN_SLICE',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postPrescoringAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.prescoring = null;
      })
      .addCase(postPrescoringAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.prescoring = action.payload;
      })
      .addCase(postPrescoringAsync.rejected, (state, action) => {
        state.loading = false;
        state.prescoring = null;
        state.error = action.payload ?? action.error.message ?? 'Unknown error';
      });
  },
});

export default loanSlice.reducer;
