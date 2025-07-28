import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INotificationState } from '@/store/reducers/Notification/types';

const initialState: INotificationState = {
  message: null,
  severity: null,
};

const notificationSlice = createSlice({
  name: 'NOTIFICATION_SLICE',
  initialState,
  reducers: {
    showNotification: (
      state,
      action: PayloadAction<{ message: string; severity: 'success' | 'error' }>
    ) => {
      const { message, severity } = action.payload;

      state.message = message;
      state.severity = severity;
    },
    clearNotification: (state) => {
      state.message = null;
      state.severity = null;
    },
  },
});

export const { showNotification, clearNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
