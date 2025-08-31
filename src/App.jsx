import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AboutUs from "./pages/AboutUs";
import WebApps from "./pages/WebApps";
import BusinessConsulting from "./pages/BusinessConsulting";
import ServicesLayout from "./layouts/ServicesLayout";
import AppDevelopment from "./pages/AppDevelopment";
import Analytics from "./pages/Analytics";
import AIAutomation from "./pages/AIAutomation";
import DigitalMarketing from "./pages/DigitalMarketing";
import Finance from "./pages/Finance";
import CyberInvestigation from "./pages/CyberInvestigation";
import CyberSecurity from "./pages/CyberSecurity";
import Careers from "./pages/Careers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />

        {/* Services Section with Layout */}
        <Route path="/services-offered" element={<ServicesLayout />}>
          <Route path="business-consulting" element={<BusinessConsulting />} />
          <Route path="web-apps" element={<WebApps />} />
          <Route path="app-development" element={<AppDevelopment />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="ai-automation" element={<AIAutomation />} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route path="finance" element={<Finance />} />
          <Route path="cyber-investigation" element={<CyberInvestigation />} />
          <Route path="cyber-security" element={<CyberSecurity />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
