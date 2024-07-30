import React from 'react';
import Home from './components/home/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/not-found/PageNotFound';
import { AuthContextProvider } from './hooks/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const Login = React.lazy(() => import('./components/login/Login'));
const Register = React.lazy(() => import('./components/register/Register'));
const Profile = React.lazy(() => import('./components/profile/Profile'));
const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="/login"
              element={
                <React.Suspense fallback={<>Login</>}>
                  <Login />
                </React.Suspense>
              }
            />
            <Route
              path="/signup"
              element={
                <React.Suspense fallback={<>Register</>}>
                  <Register />
                </React.Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <React.Suspense fallback={<>Profile</>}>
                  <ProtectedRoute>
                    <Dashboard Component={Profile} board={true} collections={false} settings={false} />
                  </ProtectedRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/dashboard"
              element={
                <React.Suspense fallback={<>Dashboard</>}>
                  <ProtectedRoute>
                    <Dashboard Component={Profile} board={true} collections={false} settings={false} />
                  </ProtectedRoute>
                </React.Suspense>
              }
            />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
