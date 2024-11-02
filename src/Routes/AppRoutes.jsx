import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";

import { ROUTES_CONFIG } from "./routes";

const AppRoutes = () => {
  const routes = createRoutesFromChildren(
    <Route path="/" >
      {ROUTES_CONFIG.map(({ path, element }, index) => (
        <Route
          key={index}
          path={path}
          element={element}
        />
      ))}
    </Route>
  );

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default AppRoutes;