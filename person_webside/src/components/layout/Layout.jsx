import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-body-main text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
