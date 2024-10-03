import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout/layout";

const router = createBrowserRouter([
  {
    path: "/react-es",
    element: <Layout />,
    children: [
      {
        path: "/react-es",
        element: <HomePage />,
      },
      {
        path: "/react-es/list",
        element: <ListPage />,
      },
      {
        path: "/react-es/:id",
        element: <SinglePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
