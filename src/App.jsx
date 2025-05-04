import React, { useContext, useEffect, useState } from 'react';
import Login from './components/auth/login';
import Employeedashboard from './components/Dashboard/Employeedashboard';
import Admindashboard from './components/Dashboard/Admindashboard';
import { Authcontext } from './Context/Authprovider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedinuserdata, setloggedinuserdata] = useState(null);
  const [authdata, setuserdata] = useContext(Authcontext); 

  useEffect(() => {
    try {
      const loggedinuser = JSON.parse(localStorage.getItem("loggedinuser"));
      if (loggedinuser) {
        setUser(loggedinuser.role);
        setloggedinuserdata(loggedinuser.data);
      }
    } catch (err) {
      console.error("Error parsing localStorage:", err);
      localStorage.removeItem("loggedinuser");
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      const adminData = authdata?.admin?.find((a) => a.email === email);
      if (adminData) {
        setUser('admin');
        localStorage.setItem('loggedinuser', JSON.stringify({ role: 'admin', data: adminData }));
      } else {
        alert('Admin not found');
      }
    } else if (authdata?.employees) {
      const employee = authdata.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser('employee');
        setloggedinuserdata(employee);
        localStorage.setItem('loggedinuser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert('Invalid Credentials');
      }
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <Admindashboard data={loggedinuserdata} changeUser={setUser} />
      ) : (
        <Employeedashboard data={loggedinuserdata} changeUser={setUser} />
      )}
    </>
  );
};

export default App;
