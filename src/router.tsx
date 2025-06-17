import { createBrowserRouter } from 'react-router';

import { Dashboard } from './pages/app/Dashboard';
import { SignIn } from './pages/auth/sign-in';
import { App } from './pages/_layouts/app';
import { Auth } from './pages/_layouts/auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: '/', element: <Dashboard /> }]
  },
  {
    path: '/sign-in',
    element: <Auth />,
    children: [{ path: '/sign-in', element: <SignIn /> }]
  }
]);
