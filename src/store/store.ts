import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import exchangeReducer from '@/store/reducers/ExchangeRate';
import newsReducer from '@/store/reducers/News';
import loanReducer from '@/store/reducers/Loan';
import notificationReducer, {
  showNotification,
} from '@/store/reducers/Notification';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isRejectedWithValue,
  effect: (action, api) => {
    const message =
      typeof action.payload === 'string'
        ? action.payload
        : (action.error?.message ?? 'Unknown error');

    api.dispatch(
      showNotification({
        message,
        severity: 'error',
      })
    );
  },
});

export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({
      exchangeRate: exchangeReducer,
      news: newsReducer,
      loan: loanReducer,
      notification: notificationReducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
