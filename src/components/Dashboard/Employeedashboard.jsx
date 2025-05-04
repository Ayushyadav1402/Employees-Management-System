import React from 'react';
import Header from '../other/Header';
import TasklistNumber from '../other/TasklistNumber';
import Tasklist from '../Tasklist/Tasklist';

const Employeedashboard = (props) => {
  

  return (
    <div className="p-10 text-white bg-[#1c1c1c] h-screen overflow-y-auto">
      <Header changeUser={props.changeUser}  data={props.data} />
      <TasklistNumber data={props.data} />
      <Tasklist data={props.data} />
    </div>
  );
};

export default Employeedashboard;
