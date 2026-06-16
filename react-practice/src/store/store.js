import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// configureStore is the RTK version of the old "createStore".
// It automatically sets up the Redux DevTools and applies middleware for you!
export const store = configureStore({
  reducer: {
    counter: counterReducer, // This gives this slice the namespace "counter"
    // In the future, you'd add more slices here: user: userReducer, cart: cartReducer
  },
});