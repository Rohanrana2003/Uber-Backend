import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaaptainContext";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { setCaptain, captain, loading, setLoading } =
    useContext(CaptainDataContext);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
      return;
    }

    const getProfile = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captain/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.status === 200) {
          setCaptain(response.data.Captain);
        }
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        navigate("/captain-login");
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, [token, navigate, setCaptain, setLoading]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return <> {children}</>;
};

export default CaptainProtectedWrapper;
