import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './pages/Auth/Routes/Private';
import Public from './pages/Auth/Routes/Public';
import AuthProvider from './pages/Auth/AuthProvider';
import Dashboard from './pages/dashBoard/Index';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import PageNotFound from './pages/Auth/PageNotFound';
import Home from './pages/home';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route element={<Public />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} >
            <Route path='/' element={<Dashboard/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
          </Route>
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;


