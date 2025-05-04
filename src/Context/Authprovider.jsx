import React, { createContext, useEffect, useState } from 'react';
import { getlocalstorage, setlocalstorage } from '../utils/localstorage';

export const Authcontext = createContext();

const Authprovider = ({ children }) => {
  const [userdata, setuserdata] = useState({ employees: [], admin: [] }); // Make sure we have both employees and admin by default

  useEffect(() => {
    // Initialize localStorage with default data if not already
    setlocalstorage();

    // Get data from localStorage
    const data = getlocalstorage();

    // Ensure we get a consistent structure
    if (data && Array.isArray(data.employees) && Array.isArray(data.admin)) {
      setuserdata(data);
    } else {
      // fallback in case of invalid structure
      setuserdata({ employees: [], admin: [] });
    }
  }, []);

  return (
    <Authcontext.Provider value={[userdata, setuserdata]}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;
