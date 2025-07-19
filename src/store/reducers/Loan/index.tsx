import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoanState } from '@/store/reducers/Loan/types';
import { applyOfferAsync, postPrescoringAsync } from '@/store/actions/Loan';
import { IPrescoringResponseDTO } from '@/types/loan';

const initialState: ILoanState = {
  error: null,
  loading: false,
  offers: null,
};

const loanSlice = createSlice({
  name: 'LOAN_SLICE',
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<IPrescoringResponseDTO[]>) => {
      state.offers = action.payload;
    },
    resetOffers: (state) => {
      state.offers = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postPrescoringAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.offers = null;
      })
      .addCase(postPrescoringAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.offers = action.payload;
      })
      .addCase(postPrescoringAsync.rejected, (state, action) => {
        state.loading = false;
        state.offers = null;
        state.error = action.payload ?? action.error.message ?? 'Unknown error';
      })
      .addCase(applyOfferAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(applyOfferAsync.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(applyOfferAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error.message ?? 'Unknown error';
      });
  },
});

export const { setOffers, resetOffers } = loanSlice.actions;

export default loanSlice.reducer;
