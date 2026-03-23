import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [, setUser] = useContext(UserDataContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const getProfile = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, [token, navigate, setUser]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return <> {children}</>;
};

export default UserProtectedWrapper;
