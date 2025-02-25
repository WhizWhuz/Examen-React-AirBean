import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Cart from "./pages/Cart";
import MenuPage from "./pages/MenuPage";
import Nav from "./assets/components/Nav";
import Status from "./pages/Status";
import NotFound from "./pages/NotFound";
import HeaderBG from "./assets/components/Header";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route
          path="Nav"
          element={<Nav isOpen={isOpen} setIsOpen={setIsOpen} />}
        ></Route>
        <Route path="Cart" element={<Cart />}></Route>
        <Route
          path="Header"
          element={<HeaderBG isOpen={isOpen} setIsOpen={setIsOpen} />}
        ></Route>
        <Route path="MenuPage" element={<MenuPage />}></Route>
        <Route path="Status" element={<Status />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
