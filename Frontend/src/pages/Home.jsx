import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiArrowDownWideFill, RiUserFill } from "@remixicon/react";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);

  const submitHandler = (e) => {
    e.stopPropagation();
  };

  const panelRef = useRef();

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0",
        });
      }
    },
    [panelOpen],
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1280px-Uber_logo_2018.png?_=20180913054426"
      />

      <div className="h-screen w-screen  ">
        <img
          className="h-full w-full object-cover"
          src="https://raw.githubusercontent.com/MindorksOpenSource/Uber-Car-Animation-Android/master/assets/how-to-add-uber-car-animation-in-android-app-draw-path.jpg"
          alt=""
        />
      </div>

      <div className=" h-screen flex flex-col justify-end absolute top-0 w-full ">
        <div className="h-[30%] bg-white p-5 relative">
          {panelOpen && (
            <h5
              className="absolute top-5 right-5 cursor-pointer"
              onClick={() => setPanelOpen(false)}
            >
              <RiArrowDownWideFill />
            </h5>
          )}
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

        <div ref={panelRef} className=" bg-white  h-0 ">
          <LocationSearchPanel />
        </div>
      </div>

      <div className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8">
        <h2 className="text-2xl font-semibold mb-5">Choose a vehicle</h2>
        <div className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between">
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

        <div className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between">
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

        <div className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between">
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
    </div>
  );
};

export default Home;
