import {
  RiArrowDownWideFill,
  RiCurrencyFill,
  RiMapPinFill,
  RiMapPinUserFill,
} from "@remixicon/react";
import React from "react";

const ConfirmRide = ({ setLookingForDriverPanel, setConfirmRidePanel }) => {
  return (
    <div>
      <div
        className="absolute right-5 top-5"
        onClick={() => setConfirmRidePanel(false)}
      >
        <RiArrowDownWideFill />
      </div>
      <h2 className="text-2xl font-semibold mb-5">Confirm your Ride</h2>

      <div className="flex gap-2 justify-between items-center flex-col">
        <img
          className="h-28"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8zMDUxZTYwMi0xMGJiLTRlNjUtYjEyMi1lMzk0ZDgwYTljNDcucG5n"
          alt=""
        />

        <div className="w-full mt-5">
          <div className="flex items-center gap-4 p-3 border-b-2">
            <RiMapPinUserFill size={20} />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 border-b-2">
            <RiMapPinFill size={20} />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 ">
            <RiCurrencyFill size={20} />
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setLookingForDriverPanel(true)}
          className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
