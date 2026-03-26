import { Link } from "react-router-dom";
import { RiLogoutBoxRLine } from "@remixicon/react";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopupPanel from "../components/ConfirmRidePopupPanel";

const CaptainHome = () => {
  // States
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  // Refs
  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  // Ride Popup Panel
  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          translateY: 0,
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          translateY: "100%",
        });
      }
    },
    [ridePopupPanel],
  );

  // Confirm Ride Popup Panel
  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          translateY: 0,
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          translateY: "100%",
        });
      }
    },
    [confirmRidePopupPanel],
  );

  return (
    <div className="h-screen">
      <div className="w-full fixed top-0 p-3 flex justify-between items-center ">
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1280px-Uber_logo_2018.png?_=20180913054426"
        />
        <Link
          to={"/home"}
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <RiLogoutBoxRLine />
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://raw.githubusercontent.com/MindorksOpenSource/Uber-Car-Animation-Android/master/assets/how-to-add-uber-car-animation-in-android-app-draw-path.jpg"
          alt=""
        />
      </div>

      {/* CaptainDetails Panel */}
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>

      {/* Ride Popup Panel */}
      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-10 bottom-0  translate-y-[100%] bg-white px-3 py-6"
      >
        <RidePopup
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>

      {/* Confirm Ride Popup Panel */}
      <div
        ref={confirmRidePopupPanelRef}
        className="fixed w-full z-10 bottom-0  translate-y-[100%] bg-white px-3 py-6 h-screen"
      >
        <ConfirmRidePopupPanel
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
