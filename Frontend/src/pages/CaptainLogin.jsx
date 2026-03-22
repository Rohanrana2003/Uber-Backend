import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email: email, password: password };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/login`,
        loginData,
      );

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("token", data.token);
        setCaptain(data.captain);
        navigate("/captain-home");
      }
    } catch (error) {
      console.log("Login failed:", error.response?.data || error.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="mb-3 w-16"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
        />

        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            type="email"
            value={email}
            placeholder="Email@example.com"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>

        <p className="text-center mb-4">
          Join a fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a captain
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] inline-block text-center text-white font-semibold mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        >
          Sign In as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
