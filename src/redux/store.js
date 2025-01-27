import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../pages/dashBoard/state/dashboard-slices';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    // Add other reducers here
  },
});
