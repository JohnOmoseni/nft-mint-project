import "./index.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Menu from "./components/Menu";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="wrapper">
      <Header setOpenMenu={setOpenMenu} />
      <AnimatePresence>
        {openMenu && <Menu setOpenMenu={setOpenMenu} />}
      </AnimatePresence>

      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
