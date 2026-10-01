import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Product } from "./pages/Product";
import { Cart } from "./components/Cart";
import { Account } from "./pages/Account";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Success } from "./pages/Success";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        element: <ProtectedRoute/>,
        children: [
          {
            path: "/account",
            element: <Account />,
          }
        ]
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);
