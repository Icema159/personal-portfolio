import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Projects from "./pages/Projects"; // 👈 svarbu!

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <BentoGrid />
                </>
              }
            />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}