import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoanState } from '@/store/reducers/Loan/types';
import {
  agreePaymentScheduleAsync,
  applyOfferAsync,
  getApplicationById,
  postPrescoringAsync,
  sendScoringAsync,
} from '@/store/actions/Loan';
import { IPrescoringResponseDTO } from '@/types/loan';
import {
  IS_PAYMENT_SCHEDULE_ACCEPTED,
  STEP,
} from '@/constants/localStorageKeys';

const initialState: ILoanState = {
  error: null,
  loading: false,
  offers: null,
  isScoringSend: false,
  applicationById: null,
  isAgreeWithPaymentSchedule: !!localStorage.getItem(
    IS_PAYMENT_SCHEDULE_ACCEPTED
  ),
  step: Number(localStorage.getItem(STEP)),
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
    setScoringSend: (state, action: PayloadAction<boolean>) => {
      state.isScoringSend = action.payload;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    resetLoanState: (state) => {
      state.error = null;
      state.loading = false;
      state.offers = null;
      state.isScoringSend = false;
      state.applicationById = null;
      state.isAgreeWithPaymentSchedule = false;
      state.step = 1;
    },
    setPaymentScheduleAccepted: (state, action: PayloadAction<boolean>) => {
      state.isAgreeWithPaymentSchedule = action.payload;
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
      })
      .addCase(sendScoringAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isScoringSend = false;
      })
      .addCase(sendScoringAsync.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.isScoringSend = true;
      })
      .addCase(sendScoringAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error.message ?? 'Unknown error';
        state.isScoringSend = false;
      })
      .addCase(getApplicationById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.applicationById = null;
      })
      .addCase(getApplicationById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.applicationById = action.payload;
      })
      .addCase(getApplicationById.rejected, (state, action) => {
        state.loading = false;
        state.applicationById = null;
        state.error = action.payload ?? action.error.message ?? 'Unknown error';
      })
      .addCase(agreePaymentScheduleAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isAgreeWithPaymentSchedule = false;
      })
      .addCase(agreePaymentScheduleAsync.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.isAgreeWithPaymentSchedule = true;
      })
      .addCase(agreePaymentScheduleAsync.rejected, (state, action) => {
        state.loading = false;
        state.isAgreeWithPaymentSchedule = false;
        state.error = action.payload ?? action.error.message ?? 'Unknown error';
      });
  },
});

export const {
  setOffers,
  resetOffers,
  setScoringSend,
  setStep,
  resetLoanState,
  setPaymentScheduleAccepted,
} = loanSlice.actions;

export default loanSlice.reducer;
