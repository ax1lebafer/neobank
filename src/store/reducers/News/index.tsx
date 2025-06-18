import { createSlice } from '@reduxjs/toolkit';
import { INewsState } from '@/store/reducers/News/types';
import { getNewsAsync } from '@/store/actions/News';

const initialState: INewsState = {
  loading: false,
  error: null,
  news: null,
};

const newsSlice = createSlice({
  name: 'NEWS_SLICE',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.news = null;
      })
      .addCase(getNewsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.news = action.payload;
      })
      .addCase(getNewsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error.message ?? 'Unknown error';
        state.news = null;
      });
  },
});

export default newsSlice.reducer;
