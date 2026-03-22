import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useContext(UserDataContext);
  const navigate = useNavigate();

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginUser = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/login`,
        loginUser,
      );

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("token", data.token);
        setUser(data.user);

        navigate("/home");
      }
    } catch (error) {
      console.log("Login Failed:", error.response?.data || error.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="mb-10 w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1280px-Uber_logo_2018.png?_=20180913054426"
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
          New Here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create new Accout
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] inline-block text-center text-white font-semibold mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        >
          Sign In as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
