import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow max-w-6xl mx-auto p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}