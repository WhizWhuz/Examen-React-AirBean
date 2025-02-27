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
import Cart from "./assets/components/Cart";
import MenuPage from "./pages/MenuPage";
import Nav from "./assets/components/Nav";
import Header from "./assets/components/Header";
import Status from "./pages/Status";
import NotFound from "./pages/NotFound";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <Router>
      <AppContent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        cartIsOpen={cartIsOpen}
        setCartIsOpen={setCartIsOpen}
      />
    </Router>
  );
}

function AppContent({ isOpen, setIsOpen, cartIsOpen, setCartIsOpen }) {
  const location = useLocation();

  console.log("AppContent props:", { isOpen, setIsOpen });

  const hideHeaderOnRoutes = ["/cart", "/status", "/"];

  return (
    <>
      <Header
        setIsOpen={setIsOpen}
        hidden={hideHeaderOnRoutes.includes(location.pathname)}
        setCartIsOpen={setCartIsOpen} // ✅ Pass it here!}
      />

      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      <Cart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/status" element={<Status />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
