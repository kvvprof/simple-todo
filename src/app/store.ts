import todoSlice from './../features/todoSlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {todoSlice},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch