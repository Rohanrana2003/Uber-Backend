import { RiMapPinFill } from "@remixicon/react";

const LocationSearchPanel = () => {
  return (
    <div className="px-5">
      <div className="flex items-center justify-start my-2 border-transparent active:border-black gap-4 border-2 p-3 rounded-xl">
        <h2 className="bg-[#eee] w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full">
          <RiMapPinFill size={20} />
        </h2>
        <h4 className="font-medium">2458, Sector 71, Mohali, Punjab</h4>
      </div>

      <div className="flex items-center justify-start my-2 border-transparent active:border-black gap-4 border-2 p-3 rounded-xl">
        <h2 className="bg-[#eee] w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full">
          <RiMapPinFill size={20} />
        </h2>
        <h4 className="font-medium">118, MG Road, Bengaluru, Karnataka</h4>
      </div>

      <div className="flex items-center justify-start my-2 border-transparent active:border-black gap-4 border-2 p-3 rounded-xl">
        <h2 className="bg-[#eee] w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full">
          <RiMapPinFill size={20} />
        </h2>
        <h4 className="font-medium">22B, Park Street, Kolkata, West Bengal</h4>
      </div>

      <div className="flex items-center justify-start my-2 border-transparent active:border-black gap-4 border-2 p-3 rounded-xl">
        <h2 className="bg-[#eee] w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full">
          <RiMapPinFill size={20} />
        </h2>
        <h4 className="font-medium">9, Banjara Hills, Hyderabad, Telangana</h4>
      </div>

      <div className="flex items-center justify-start my-2 border-transparent active:border-black gap-4 border-2 p-3 rounded-xl">
        <h2 className="bg-[#eee] w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full">
          <RiMapPinFill size={20} />
        </h2>
        <h4 className="font-medium">401, FC Road, Pune, Maharashtra</h4>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
