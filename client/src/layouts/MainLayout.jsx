import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialShareBar from "../components/SocialShareBar";
import FloatingContactHub from "../components/FloatingContactHub";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>

      <SocialShareBar />
      
                  <FloatingContactHub />
      
                  <ScrollToTopButton />
      <Footer />
    </>
  );
}
