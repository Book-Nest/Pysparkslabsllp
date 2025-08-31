import Navigation from "../components/Navigation";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function ServicesLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <ContactUs />
      <Footer />
    </>
  );
}
