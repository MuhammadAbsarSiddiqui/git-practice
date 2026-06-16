import { createSlice } from '@reduxjs/toolkit';

// 1. Define the initial state
const initialState = {
  value: 0,
  status: 'idle' // 'idle' | 'loading' | 'failed'
};

// 2. Create the slice
export const counterSlice = createSlice({
  name: 'counter', // This name will be used in action types (e.g., 'counter/increment')
  initialState,
  // 3. Reducers: These are your "actions" and "reducer" combined!
  reducers: {
    increment: (state) => {
      // ✅ Look here! In RTK, you can write "state.value += 1" 
      // It looks like you're mutating it, but under the hood, Immer converts this to an immutable update!
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      // action.payload holds the data passed from the component
      state.value += action.payload;
    }
  }
});

// 4. Export the "Actions" so components can dispatch them
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 5. Export the "Reducer" so we can add it to the store
export default counterSlice.reducer;