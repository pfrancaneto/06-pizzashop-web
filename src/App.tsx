import './global.css';

import { RouterProvider } from 'react-router';
import { router } from './router';
import { Toaster } from 'sonner';

export function App() {
  return (
    <>
      <Toaster richColors />
      <RouterProvider router={router} />
    </>
  );
}
