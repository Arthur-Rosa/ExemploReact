import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../view/Login/Login";

const ConfigRouter: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Login */}
          <Route
            path="/d/"
            element={
              <>
                <h2>Navbar de Admin</h2>
                <Routes>
                  <Route path="/admin" element={<h2>Admin</h2>} />
                </Routes>
              </>
            }
          />
          <Route path="*" element={<h1>404 Nao encontrado</h1>} /> {/* 404 */}
        </Routes>
      </Router>
    </>
  );
};

export default ConfigRouter;
