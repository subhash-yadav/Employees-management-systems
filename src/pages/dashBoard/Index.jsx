import { useState } from 'react';
import { useAuth } from '../Auth/AuthProvider'; // Adjust the path as needed
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchData } from './state/dashboard-actions';

const Dashboard = () => {

  const dispatch = useDispatch()

  const { logout } = useAuth(); // Use the hook to access logout
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cancelToken, setCancelToken] = useState(null);

  const cancelRequest = () => {
    if (cancelToken) {
      cancelToken.cancel('API call canceled by the user.');
    }
  };
  const handleFetchData = () => {
    fetchData(setCancelToken, setError, setData)
  }



  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <button onClick={handleFetchData} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>
        <button onClick={cancelRequest} disabled={!cancelToken}>
          Cancel
        </button>

        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {data && (
          <ul>
            {data.slice(0, 5).map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
