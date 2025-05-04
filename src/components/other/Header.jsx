import React, { useEffect, useState } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('User');

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('loggedinuser'));
    if (loggedUser) {
      if (loggedUser.role === 'employee' && loggedUser.data?.firstname) {
        setUsername(loggedUser.data.firstname);
      } else if (loggedUser.role === 'admin') {
        setUsername('Admin');
      }
    }
  }, []);

  const logoutuser = () => {
    localStorage.removeItem('loggedinuser');
    props.changeUser('');
  };

  return (
    <header className="flex items-end justify-between text-white">
      <div>
        <h1 className="text-2xl font-medium">Hello!!</h1>
        <span className="text-3xl font-semibold">
          {username} 👋
        </span>
      </div>
      <button
        onClick={logoutuser}
        className="bg-red-600 text-lg font-medium text-white rounded-full px-5 py-3"
        aria-label="Log out"
      >
        Log Out
      </button>
    </header>
  );
};

export default Header;

