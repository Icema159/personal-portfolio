import { BrowserRouter as Router, useLocation, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Projects from "./pages/Projects";
import About from "./pages/About";
import PageWrapper from "./components/PageWrapper"
import { AnimatePresence } from "framer-motion";
import Contacts from "./pages/Contacts"

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Hero />
                  <BentoGrid />
                </PageWrapper>
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}