import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About"
import Country from "./pages/Country";
import { CountryDetails } from "./components/layouts/CountryDetails";
import { AppLayout } from "./components/layouts/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorPage/>,
    children : [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "country",
        element: <Country />,
      }, {
        path: "country/:id",
        element: <CountryDetails />,
      }]
  }

]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;