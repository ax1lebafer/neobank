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
    builder.addCase(getNewsAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export default newsSlice.reducer;
