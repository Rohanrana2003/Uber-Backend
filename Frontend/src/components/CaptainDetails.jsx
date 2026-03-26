import {
  RiTimer2Line,
  RiBookletLine,
  RiDashboard3Line,
} from "@remixicon/react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://media.licdn.com/dms/image/v2/D5603AQEs0Q4zWXb0YQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722780012824?e=1776297600&v=beta&t=6G7i9BjXzlQAwJkFihEPOBxfP6tSjLZt970ObMzg_K8"
            alt=""
          />
          <h4 className="text-lg font-medium">Rohan Rana</h4>
        </div>
        <div>
          <h4 className="text-lg font-semibold">₹295.2</h4>
          <p className="text-sm ">Earned</p>
        </div>
      </div>

      <div className="flex p-6 bg-gray-100 rounded-xl justify-center gap-5 items-start mt-6">
        <div className="text-center flex flex-col items-center  ">
          <RiTimer2Line />
          <h2 className="text-lg font-medium">10.2</h2>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center flex flex-col items-center  ">
          <RiDashboard3Line />
          <h2 className="text-lg font-medium">10.2</h2>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center flex flex-col items-center  ">
          <RiBookletLine />
          <h2 className="text-lg font-medium">10.2</h2>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
