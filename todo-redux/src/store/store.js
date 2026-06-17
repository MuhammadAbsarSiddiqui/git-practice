import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

/**
 * configureStore is a wrapper around Redux's createStore function.
 * It automatically sets up the store with good defaults, including the Redux Thunk middleware
 * and enabling the Redux DevTools Extension.
 */
export const store = configureStore({
  reducer: {
    // Register the todoReducer under the 'todos' key in the global state.
    // This means the state managed by this reducer will be accessible at state.todos
    todos: todoReducer,
  },
});
