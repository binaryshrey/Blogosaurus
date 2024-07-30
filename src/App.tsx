import React from 'react';
import Home from './components/home/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/not-found/PageNotFound';
import { AuthContextProvider } from './hooks/AuthContext';

const Login = React.lazy(() => import('./components/login/Login'));
const Register = React.lazy(() => import('./components/register/Register'));

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
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
