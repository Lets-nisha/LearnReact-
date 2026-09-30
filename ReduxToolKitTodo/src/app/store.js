import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoStore';

export const store = configureStore({
    reducer: todoReducer
})