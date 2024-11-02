import About from "../Components/About";
import Home from "../Components/Home";
import NotFoundPage from "../Components/NotFoundPage";
import Projects from "../Components/Projects";
export const ROUTES_CONFIG = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Projects /> },
  { path: "*", element: <NotFoundPage /> },
];
