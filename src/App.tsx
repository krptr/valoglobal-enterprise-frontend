import { Outlet } from "react-router";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { App };
