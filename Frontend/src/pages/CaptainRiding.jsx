import { useGSAP } from "@gsap/react";
import { RiArrowUpWideFill, RiLogoutBoxRLine } from "@remixicon/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  // Confirm Ride Popup Panel
  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          translateY: 0,
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          translateY: "100%",
        });
      }
    },
    [finishRidePanel],
  );

  return (
    <div className="h-screen relative">
      <div className="w-full fixed top-0 p-3 flex justify-between items-center ">
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1280px-Uber_logo_2018.png?_=20180913054426"
        />
        <Link
          to={"/captain-home"}
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <RiLogoutBoxRLine />
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://raw.githubusercontent.com/MindorksOpenSource/Uber-Car-Animation-Android/master/assets/how-to-add-uber-car-animation-in-android-app-draw-path.jpg"
          alt=""
        />
      </div>

      <div
        className="h-1/5 p-6 flex items-center relative justify-between bg-yellow-400 "
        onClick={() => setFinishRidePanel(true)}
      >
        <div className="absolute right-0 top-0 flex items-center w-full  justify-center">
          <RiArrowUpWideFill />
        </div>

        <h4 className="text-xl font-semibold">4 KM Away</h4>
        <button className="  bg-green-600 text-white font-semibold p-3  px-8 rounded-lg">
          Complete Ride
        </button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0  translate-y-[100%] bg-white px-3 py-6"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
