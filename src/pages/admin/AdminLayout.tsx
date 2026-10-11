import { Outlet } from "react-router";
import { AdminNavbar } from "./components/AdminNavbar";
import { AdminFooter } from "./components/AdminFooter";

function AdminLayout() {
  return (
    <>
      <AdminNavbar />
      <main>
        <Outlet />
      </main>
      <AdminFooter />
    </>
  );
}

export { AdminLayout };
