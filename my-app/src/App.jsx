import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Cart from "./pages/Cart";
import MenuPage from "./pages/MenuPage";
import Nav from "./assets/components/Nav";
import Header from "./assets/components/Header";
import Status from "./pages/Status";
import NotFound from "./pages/NotFound";

function App() {
  const [isOpen, setIsOpen] = useState(false); // ✅ State is correctly defined

  return (
    <Router>
      <AppContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </Router>
  );
}

function AppContent({ isOpen, setIsOpen }) {
  const location = useLocation();

  console.log("AppContent props:", { isOpen, setIsOpen }); // ✅ Debugging

  // ✅ Pages where Header should NOT appear
  const hideHeaderOnRoutes = ["/cart", "/status", "/"];

  return (
    <>
      {/* ✅ Always render Header, but hide it via CSS instead of conditionally */}
      <Header
        setIsOpen={setIsOpen}
        hidden={hideHeaderOnRoutes.includes(location.pathname)}
      />

      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/Status" element={<Status />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
