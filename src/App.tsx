import React from 'react';
import Home from './components/home/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/not-found/PageNotFound';
import { AuthContextProvider } from './hooks/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from '@material-tailwind/react';

const Login = React.lazy(() => import('./components/login/Login'));
const Register = React.lazy(() => import('./components/register/Register'));
const Profile = React.lazy(() => import('./components/profile/Profile'));
const Blogs = React.lazy(() => import('./components/blogs/Blogs'));
const BlogEditor = React.lazy(() => import('./components/blogs/BlogEditor'));
const BlogViewer = React.lazy(() => import('./components/blogs/BlogViewer'));
const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));
const Analytics = React.lazy(() => import('./components/dashboard/Analytics'));
const Settings = React.lazy(() => import('./components/dashboard/Settings'));
const Collections = React.lazy(() => import('./components/examples/Collections'));
const Blog1 = React.lazy(() => import('./components/examples/Blog1'));
const Blog2 = React.lazy(() => import('./components/examples/Blog2'));
const Blog3 = React.lazy(() => import('./components/examples/Blog3'));

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
                <React.Suspense fallback={<></>}>
                  <Login />
                </React.Suspense>
              }
            />
            <Route
              path="/signup"
              element={
                <React.Suspense fallback={<></>}>
                  <Register />
                </React.Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <React.Suspense fallback={<></>}>
                  <ProtectedRoute>
                    <Dashboard Component={Profile} board={false} collections={false} analytics={false} settings={false} />
                  </ProtectedRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/dashboard"
              element={
                <React.Suspense fallback={<></>}>
                  <ProtectedRoute>
                    <ThemeProvider>
                      <Dashboard Component={Blogs} board={true} collections={false} analytics={false} settings={false} />
                    </ThemeProvider>
                  </ProtectedRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/analytics"
              element={
                <React.Suspense fallback={<></>}>
                  <ProtectedRoute>
                    <ThemeProvider>
                      <Dashboard Component={Analytics} board={false} collections={false} analytics={true} settings={false} />
                    </ThemeProvider>
                  </ProtectedRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/settings"
              element={
                <React.Suspense fallback={<></>}>
                  <ProtectedRoute>
                    <ThemeProvider>
                      <Dashboard Component={Settings} board={false} collections={false} analytics={false} settings={true} />
                    </ThemeProvider>
                  </ProtectedRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/draft/:draftID"
              element={
                <React.Suspense fallback={<></>}>
                  <ProtectedRoute>
                    <BlogEditor />
                  </ProtectedRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/blog/:blogID"
              element={
                <React.Suspense fallback={<></>}>
                  <BlogViewer />
                </React.Suspense>
              }
            />
            <Route
              path="/examples"
              element={
                <React.Suspense fallback={<></>}>
                  <Collections />
                </React.Suspense>
              }
            />
            <Route
              path="/posts/dynamic-routing"
              element={
                <React.Suspense fallback={<></>}>
                  <Blog1 />
                </React.Suspense>
              }
            />
            <Route
              path="/posts/pre-render"
              element={
                <React.Suspense fallback={<></>}>
                  <Blog2 />
                </React.Suspense>
              }
            />
            <Route
              path="/posts/static-generation"
              element={
                <React.Suspense fallback={<></>}>
                  <Blog3 />
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
