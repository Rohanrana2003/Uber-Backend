import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSIgnup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Home />} />

        {/* User */}
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />

        {/* Captain */}
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
};

export default App;
