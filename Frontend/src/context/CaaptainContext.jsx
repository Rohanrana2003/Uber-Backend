import { createContext, useState } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [Captain, setCaptain] = useState();

  const updateCaptian = (captainData) => {
    setCaptain(captainData);
  };

  const value = { updateCaptian, Captain, setCaptain };

  return (
    <div>
      <CaptainDataContext.Provider value={value}>
        {children}
      </CaptainDataContext.Provider>
      ;
    </div>
  );
};

export default CaptainContext;
