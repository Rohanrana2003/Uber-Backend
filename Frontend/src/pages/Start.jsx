import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="h-screen bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover pt-8  w-full flex justify-between flex-col ">
        <img
          className="w-16 ml-9"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1280px-Uber_logo_2018.png?_=20180913054426"
        />

        <div className="bg-white pb-9 pt-3 px-4">
          <h2 className="text-[24px] font-semibold">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-[6px] mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
