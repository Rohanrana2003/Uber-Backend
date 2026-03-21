import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import UserSignup from "./pages/UserSIgnup";
import { UserDataContext } from "./context/UserContext";
import Start from "./pages/Start";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Start />} />

        {/* User */}
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />

        {/* Captain */}
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />

        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
