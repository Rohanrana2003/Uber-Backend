import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import ConfirmRide from "../components/ConfirmRide";
import VehiclePanel from "../components/VehiclePanel";
import WaitingForDriver from "../components/WaitingForDriver";
import LookingForDriver from "../components/LookingForDriver";
import { RiArrowDownWideFill, RiUserFill } from "@remixicon/react";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  // States
  const [pickup, setPickup] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [destination, setDestination] = useState("");
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [lookingForDriverPanel, setLookingForDriverPanel] = useState(false);
  const [waitingForDriverPanel, setWaitingForDriverPanel] = useState(false);

  // Refs
  const panelRef = useRef(null);
  const confirmRideRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const lookingForDriverRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.stopPropagation();
  };

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

  // For Vehicle Panel
  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          translateY: 0,
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          translateY: "100%",
        });
      }
    },
    [vehiclePanelOpen],
  );

  // For Confirm Ride Panel
  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRideRef.current, {
          translateY: 0,
        });
      } else {
        gsap.to(confirmRideRef.current, {
          translateY: "100%",
        });
      }
    },
    [confirmRidePanel],
  );

  // Looking for Driver Panel
  useGSAP(
    function () {
      if (lookingForDriverPanel) {
        gsap.to(lookingForDriverRef.current, {
          translateY: 0,
        });
      } else {
        gsap.to(lookingForDriverRef.current, {
          translateY: "100%",
        });
      }
    },
    [lookingForDriverPanel],
  );

  // Waiting for Driver Panel
  useGSAP(
    function () {
      if (waitingForDriverPanel) {
        gsap.to(waitingForDriverRef.current, {
          translateY: 0,
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          translateY: "100%",
        });
      }
    },
    [waitingForDriverPanel],
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1280px-Uber_logo_2018.png?_=20180913054426"
      />

      <div
        onClick={() => setVehiclePanelOpen(false)}
        className="h-screen w-screen  "
      >
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

        {/* Locations Panel */}
        <div ref={panelRef} className=" bg-white  h-0 ">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>

      {/* Vehicle Panel */}
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-[100%] bg-white px-3 py-10"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanelOpen={setVehiclePanelOpen}
        />
      </div>

      {/* Confirm Ride Panel */}
      <div
        ref={confirmRideRef}
        className="fixed w-full z-10 bottom-0 translate-y-[100%] bg-white px-3 py-6"
      >
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setLookingForDriverPanel={setLookingForDriverPanel}
        />
      </div>

      {/* Looking for driver Panel */}
      <div
        ref={lookingForDriverRef}
        className="fixed w-full z-10 bottom-0 translate-y-[100%] bg-white px-3 py-6"
      >
        <LookingForDriver
          setWaitingForDriverPanel={setWaitingForDriverPanel}
          setLookingForDriverPanel={setLookingForDriverPanel}
        />
      </div>

      {/* Waiting for driver Panel */}
      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 translate-y-[100%] bg-white px-3 py-6"
      >
        <WaitingForDriver waitingForDriverPanel={setWaitingForDriverPanel} />
      </div>
    </div>
  );
};

export default Home;
