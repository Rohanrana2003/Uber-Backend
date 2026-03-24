import { useState } from "react";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);

  const submitHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1280px-Uber_logo_2018.png?_=20180913054426"
      />

      <div className="h-screen w-screen ">
        <img
          className="h-full w-full object-cover"
          src="https://raw.githubusercontent.com/MindorksOpenSource/Uber-Car-Animation-Android/master/assets/how-to-add-uber-car-animation-in-android-app-draw-path.jpg"
          alt=""
        />
      </div>

      <div className=" h-screen flex flex-col justify-end absolute top-0 w-full ">
        <div className="h-[30%] bg-white p-5 relative">
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-[2px] top-[43%] left-[9%]  bg-gray-800 rounded-full"></div>

            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3 "
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div className="h-[70%] bg-red-500 p-5 hidden"></div>
      </div>
    </div>
  );
};

export default Home;
