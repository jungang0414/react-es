import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <p>HomePage</p>,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/:id",
        element: <SinglePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
