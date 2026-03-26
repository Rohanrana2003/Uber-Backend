import {
  RiArrowDownWideFill,
  RiCurrencyFill,
  RiMapPinFill,
  RiMapPinUserFill,
} from "@remixicon/react";

const ConfirmRidePopupPanel = ({
  setRidePopupPanel,
  setConfirmRidePopupPanel,
}) => {
  return (
    <div>
      <div
        className="absolute right-5 top-5"
        onClick={() => setConfirmRidePopupPanel(false)}
      >
        <RiArrowDownWideFill />
      </div>
      <h2 className="text-2xl font-semibold mb-5">
        Confirm this ride to start!
      </h2>

      {/* User details */}
      <div className="flex items-center justify-between  p-3 bg-yellow-300 rounded-lg mt-3 ">
        <div className="flex items-center gap-3 ">
          <img
            className="h-10 rounded-full w-10 object-cover flex-grow-0 flex-shrink-0 flex"
            src="https://media.licdn.com/dms/image/v2/D5603AQEs0Q4zWXb0YQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722780012824?e=1776297600&v=beta&t=6G7i9BjXzlQAwJkFihEPOBxfP6tSjLZt970ObMzg_K8"
            alt=""
          />
          <h2 className="text-lg font-medium">Rohan Rana</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      {/* Ride details */}
      <div className="flex gap-2 justify-between items-center flex-col">
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

        {/* Buttons */}
        <button
          onClick={() => {}}
          className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
        >
          Confirm
        </button>
        <button
          onClick={() => {
            setRidePopupPanel(false);
            setConfirmRidePopupPanel(false);
          }}
          className="w-full mt-1 bg-red-600 text-white font-semibold p-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmRidePopupPanel;
