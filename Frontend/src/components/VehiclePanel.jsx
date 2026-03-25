import { RiArrowDownWideFill, RiUserFill } from "@remixicon/react";
import React from "react";

const VehiclePanel = ({ setVehiclePanelOpen, setConfirmRidePanel }) => {
  return (
    <div>
      <div
        className="absolute right-5 top-5"
        onClick={() => setVehiclePanelOpen(false)}
      >
        <RiArrowDownWideFill />
      </div>
      <h2 className="text-2xl font-semibold mb-5">Choose a vehicle</h2>

      {/* Car */}
      <div
        onClick={() => setConfirmRidePanel(true)}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between"
      >
        <img
          className="h-16 "
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8zMDUxZTYwMi0xMGJiLTRlNjUtYjEyMi1lMzk0ZDgwYTljNDcucG5n"
          alt=""
        />
        <div className=" w-1/2 ml-2">
          <h4 className="font-medium text-base w-full ">
            UberGo{" "}
            <span className="inline-flex items-center ">
              <RiUserFill size={15} /> 4
            </span>
          </h4>

          <h5 className="font-medium text-sm">2 Mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>

        <h1 className="text-lg font-semibold">₹193.20</h1>
      </div>

      {/* Bike */}
      <div
        onClick={() => setConfirmRidePanel(true)}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between"
      >
        <img
          className="h-14"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n"
          alt=""
        />
        <div className=" w-1/2 ml-2">
          <h4 className="font-medium text-base w-full ">
            Moto{" "}
            <span className="inline-flex items-center ">
              <RiUserFill size={15} /> 1
            </span>
          </h4>

          <h5 className="font-medium text-sm">5 Mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, motorcycle rides
          </p>
        </div>

        <h1 className="text-lg font-semibold">₹83.75</h1>
      </div>

      {/* Auto */}
      <div
        onClick={() => setConfirmRidePanel(true)}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between"
      >
        <img
          className="h-10"
          src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className=" w-1/2 ml-2">
          <h4 className="font-medium text-base w-full ">
            UberAuto{" "}
            <span className="inline-flex items-center ">
              <RiUserFill size={15} /> 3
            </span>
          </h4>

          <h5 className="font-medium text-sm">3 Mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>

        <h1 className="text-lg font-semibold">₹133.25</h1>
      </div>
    </div>
  );
};

export default VehiclePanel;
