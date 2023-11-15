import {
  createBrowserRouter,
  
} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element:<Home />
      },
      {
        path: '/about',
        element:<About />
      },
      {
        path: '/services',
        element:<Services />
      },
      {
        path: '/gallery',
        element:<Gallery />
      },
      {
        path: '/contact',
        element:<Contact />
      },
    ]
  }
])