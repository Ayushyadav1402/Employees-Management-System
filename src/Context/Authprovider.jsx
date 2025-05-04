import React, { createContext, useEffect, useState } from 'react';
import { getlocalstorage, setlocalstorage } from '../utils/localstorage';

export const Authcontext = createContext();

const Authprovider = ({ children }) => {
  const [userdata, setuserdata] = useState({ employees: [], admin: [] }); 

  useEffect(() => {
    
    setlocalstorage();

  
    const data = getlocalstorage();

   
    if (data && Array.isArray(data.employees) && Array.isArray(data.admin)) {
      setuserdata(data);
    } else {
    
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
