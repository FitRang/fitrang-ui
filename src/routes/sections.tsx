import { lazy, Suspense } from "react";
import { DashboardLayout } from "../layouts/Dashboard";
import { AuthLayout } from "../layouts/Auth";
import { DesignLayout } from "../layouts/Design";
import { Riple } from "react-loading-indicators";
import { Outlet, Navigate, useRoutes } from "react-router-dom";

export const Homepage = lazy(() => import("../pages/Home"));
export const Dossier = lazy(() => import("../pages/Dossier"));
export const Wardrobe = lazy(() => import("../pages/Wardrobe"));
export const Authpage = lazy(() => import("../pages/Auth"));
export const Page404 = lazy(() => import("../pages/404"));
export const Designpage = lazy(()=>import("../pages/Design"))

export function Router() {
  const loading = <Riple color="#ECCB9A" size="large" text="" textColor="" />;
  return useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={loading}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <Homepage />, index: true },
        { path: "dossiers", element: <Dossier /> },
        { path: "wardrobe", element: <Wardrobe /> },
      ],
    },
    {
      path: "design",
      element: (
        <DesignLayout>
          <Designpage />
        </DesignLayout>
      ),
    },
    {
      path: "auth",
      element: (
        <AuthLayout>
          <Authpage />
        </AuthLayout>
      ),
    },
    {
      path: "404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
