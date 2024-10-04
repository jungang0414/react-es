import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import HomePage from "./routes/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
