import { LoginPage } from '@/pages';
import { Home } from '@/pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export const Provider = () => {
  return <RouterProvider router={router} />;
};
