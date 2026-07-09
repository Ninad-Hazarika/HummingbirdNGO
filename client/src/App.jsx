import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoutes";
import ProgramResearch from "./pages/Program_research";
import RegionalCircles from "./pages/Regional_circles";
import CollegeUnits from "./pages/College_units";
import CoreAdmin from "./pages/Core_admin";
import Guwahati from "./pages/guwahati";
import Barpeta from "./pages/barpeta";
import BarpetaRoad from "./pages/barpetaRoad";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reports" element={<About />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/team/program_research" element={<ProgramResearch />} />
          <Route path="/team/regional_circles" element={<RegionalCircles />} />
            <Route path="/team/regional_circles/guwahati" element={<Guwahati />} />
            <Route path="/team/regional_circles/barpeta" element={<Barpeta />} />
            <Route path="/team/regional_circles/barpeta_road" element={<BarpetaRoad />} />
          <Route path="/team/college_units" element={<CollegeUnits />} />
          <Route path="/team/core_admin" element={<CoreAdmin />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
