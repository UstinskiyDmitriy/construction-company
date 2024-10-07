import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slices/formSlice'; // Подключаем наш слайс

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

// Тип для RootState
export type RootState = ReturnType<typeof store.getState>;

// Тип для Dispatch
export type AppDispatch = typeof store.dispatch;

export default store;