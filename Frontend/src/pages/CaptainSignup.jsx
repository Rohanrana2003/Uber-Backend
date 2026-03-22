import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaaptainContext";

import axios from "axios";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lasName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lasName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/register`,
      captainData,
    );

    if (response.status === 201) {
      setCaptain(captainData);
      navigate("/captain-login");
    }

    setFirstName("");
    setLastName("");
    setPassword("");
    setEmail("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
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
          <h3 className="text-base font-medium mb-2">
            What's our Captain's Name
          </h3>
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
          <h3 className="text-base font-medium mb-2">
            What's our Captain's Email
          </h3>
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

          <h3 className="text-base font-medium mb-2">Vehicle Data</h3>
          <div className="flex gap-2 mb-5">
            <input
              required
              type="text"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
            <input
              required
              type="text"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              placeholder="Vehicle Plate"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
          </div>

          <div className="flex gap-2 mb-5">
            <input
              required
              type="number"
              min="1"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              placeholder="Vehicle Capacity"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg"
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Moto</option>
            </select>
          </div>

          <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Create Captain Account
          </button>
        </form>

        <p className="text-center mb-4">
          Already a Captain?{" "}
          <Link to="/captain-login" className="text-blue-600">
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

export default CaptainSignup;
