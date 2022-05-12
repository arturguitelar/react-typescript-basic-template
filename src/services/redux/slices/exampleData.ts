import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'services/redux/store';

interface InitialState {
  examples: string[];
}

const initialState: InitialState = {
  examples: [],
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setExamples: (state, { payload }) => {
      state.examples = payload;
    },
  },
});

export const selectExample = (state: RootState) => state.exampleData;
export const { setExamples } = exampleSlice.actions;

export default exampleSlice.reducer;
