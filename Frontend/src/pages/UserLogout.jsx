import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      });
  }, [navigate, token]);

  return <div>UserLogout</div>;
};

export default UserLogout;
