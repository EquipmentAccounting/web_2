import { AquipmentPage, HomePage, LoginPage, MapPage } from '@/pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/',
        element: <AquipmentPage />,
      },
      {
        path: '/map',
        element: <MapPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export const Provider = () => {
  return <RouterProvider router={router} />;
};
