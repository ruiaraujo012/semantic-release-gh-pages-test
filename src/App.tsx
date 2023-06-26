import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Root from './Root';

const App = () => {
  const router = createBrowserRouter(
    [
      {
        element: <Root />,
        path: '/',
      },
      {
        element: <Page1 />,
        path: '/page1',
      },
      {
        element: <Page2 />,
        path: '/page2',
      },
    ],
    {
      basename: import.meta.env.VITE_BASE_URL,
    },
  );

  return <RouterProvider router={router} />;
};

export default App;
