import { combineReducers } from '@reduxjs/toolkit';

import exampleData from '../slices/exampleData';

const rootReducer = combineReducers({
  exampleData,
});

export default rootReducer;
