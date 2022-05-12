import { combineReducers } from '@reduxjs/toolkit';

import exampleData from 'services/redux/slices/exampleData';

const rootReducer = combineReducers({
  exampleData,
});

export default rootReducer;
