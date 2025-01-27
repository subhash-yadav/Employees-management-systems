import { createAsyncThunk } from '@reduxjs/toolkit';
import { DASHBOARD_API_URL } from './dashboard-constants';
import axios from 'axios';

// Async Thunk to Fetch Dashboard Data
export const fetchDashboardData = createAsyncThunk(
  'dashboard/fetchDashboardData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(DASHBOARD_API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data');
      }
      const data = await response.json();
      return data; // Adjust based on your API's response structure
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchData = async (setCancelToken, setError, setData) => {
  // setLoading(true);
  setError(null);

  // Create a new CancelToken
  const source = axios.CancelToken.source();
  setCancelToken(source);

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      cancelToken: source.token,
    });
    setData(response.data);
  } catch (err) {
    if (axios.isCancel(err)) {
      console.log('Request canceled:', err.message);
    } else {
      setError(err.message);
    }
  } finally {
    // setLoading(false);
    setCancelToken(null);
  }
};