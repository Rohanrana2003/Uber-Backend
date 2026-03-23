import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [Captain, setCaptain] = useState();
  const [loading, setLoading] = useState();

  const updateCaptian = (captainData) => {
    setCaptain(captainData);
  };

  const value = { updateCaptian, Captain, setCaptain, loading, setLoading };

  return (
    <div>
      <CaptainDataContext.Provider value={value}>
        {children}
      </CaptainDataContext.Provider>
    </div>
  );
};

export default CaptainContext;
