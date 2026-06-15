import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Paintings } from "./pages/Paintings";
import { Prints } from "./pages/Prints";

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
        path: "/paintings",
        element: <Paintings />,
      },
      {
        path: "/prints",
        element: <Prints />,
      },
    ],
  },
]);
