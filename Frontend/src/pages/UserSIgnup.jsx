import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [lasName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  const [user, setUser] = useContext(UserDataContext);

  const navigate = useNavigate();

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lasName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/user/register`,
      newUser,
    );

    console.log(response);

    if (response.status === 201) {
      const data = response.data;
      localStorage.setItem("token", data.token);
      setUser(data.user);

      navigate("/Login");
    }

    setFirstName("");
    setLastName("");
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
          <h3 className="text-base font-medium mb-2">What's your Name</h3>
          <div className="flex gap-2 mb-5">
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="bg-[#eeeeee]  rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
            <input
              required
              type="text"
              value={lasName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="bg-[#eeeeee]  rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
          </div>

          <h3 className="text-base font-medium mb-2">What's your email</h3>
          <input
            required
            type="email"
            value={email}
            placeholder="Email@example.com"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            required
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Create Account
          </button>
        </form>

        <p className="text-center mb-4">
          Already a User?{" "}
          <Link to="/login" className="text-blue-600">
            Login Here
          </Link>
        </p>
      </div>

      <p className="text-[12px]">
        By proceeding, you consent to get calls, WhatsApp or SMS messages,
        including by automated means, from Uber and its affiliates to the number
        provided
      </p>
    </div>
  );
};

export default UserSignup;
