import { RiMapPinFill } from "@remixicon/react";

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanelOpen }) => {
  const locations = [
    "2458, Sector 71, Mohali, Punjab",
    "118, MG Road, Bengaluru, Karnataka",
    "22B, Park Street, Kolkata, West Bengal",
    "9, Banjara Hills, Hyderabad, Telangana",
    "401, FC Road, Pune, Maharashtra",
  ];

  return (
    <div className="px-5">
      {locations.map((location, index) => (
        <div
          key={index}
          onClick={() => {
            setVehiclePanelOpen(true);
            setPanelOpen(false);
          }}
          className="flex items-center justify-start my-2 border-transparent active:border-black gap-4 border-2 p-3 rounded-xl"
        >
          <h2 className="bg-[#eee] w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full">
            <RiMapPinFill size={20} />
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
