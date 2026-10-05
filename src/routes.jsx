import { App } from "./App";
import { AdminLayout } from "./pages/admin/AdminLayout";
import { HomePage } from "./pages/home/HomePage";
import { ServicePage } from "./pages/services/ServicePage";
import { QuotePage } from "./pages/quote/QuotePage";
import { Overview } from "./pages/admin/overview/Overview";
import { LeadManager } from "./pages/admin/lead/LeadManager";
import { Analytics } from "./pages/admin/analytics/Analytics";
import { AdminLogin } from "./pages/admin/auth/AdminLogin";
import { DemoLogin } from "./pages/demo/DemoLogin";
import { ErrorPage } from "./pages/error/ErrorPage";
import { NotFoundPage } from "./pages/not-found/NotFoundPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "service", element: <ServicePage /> },
      { path: "quote", element: <QuotePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Overview /> },
      { path: "leadmanager", element: <LeadManager /> },
      { path: "analytics", element: <Analytics /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },

  {
    path: "/admin/login",
    element: <AdminLogin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/demo/login",
    element: <DemoLogin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/demo",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Overview /> },
      { path: "leadmanager", element: <LeadManager /> },
      { path: "analytics", element: <Analytics /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

export { routes };
