import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import SignIn from "./pages/Signin";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <Product />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
