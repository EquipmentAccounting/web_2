import { LoginPage } from '@/pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export const Provider = () => {
  return <RouterProvider router={router} />;
};
