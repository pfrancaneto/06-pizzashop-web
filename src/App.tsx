import './global.css';

import { RouterProvider } from 'react-router';
import { router } from './router';
import { Toaster } from 'sonner';
import { HeadProvider } from 'react-head';

export function App() {
  return (
    <HeadProvider>
      <Toaster richColors />
      <RouterProvider router={router} />
    </HeadProvider>
  );
}
