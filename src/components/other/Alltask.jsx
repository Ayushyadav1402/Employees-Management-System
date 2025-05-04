import React, { useContext } from 'react';
import { Authcontext } from '../../Context/Authprovider';

const Alltask = () => {
  const [userdata] = useContext(Authcontext);
  const employees = userdata?.employees || [];

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
      <div className="bg-red-400 py-2 px-4 flex justify-between mb-2">
        <h2 className="w-1/5 text-lg font-medium">Employee</h2>
        <h3 className="w-1/5 text-lg font-medium">New Task</h3>
        <h3 className="w-1/5 text-lg font-medium">Completed Task</h3>
        <h3 className="w-1/5 text-lg font-medium">Failed Task</h3>
        <h3 className="w-1/5 text-lg font-medium">Active Task</h3>
      </div>

      <div>
        {employees.map((e, index) => {
          const taskCount = {
            newTask: Number(e.taskCount?.newtask) || 0,
            completed: Number(e.taskCount?.completed) || 0,
            failed: Number(e.taskCount?.failed) || 0,
            active: Number(e.taskCount?.active) || 0,
          };

          return (
            <div
              className="border-2 border-emerald-400 py-2 px-4 flex justify-between mb-2"
              key={index}
            >
              <h2 className="w-1/5 text-white text-lg font-medium">{e.firstname}</h2>
              <h3 className="w-1/5 text-yellow-600 text-lg font-medium">{taskCount.newTask}</h3>
              <h3 className="w-1/5 text-green-600 text-lg font-medium">{taskCount.completed}</h3>
              <h3 className="w-1/5 text-red-600 text-lg font-medium">{taskCount.failed}</h3>
              <h3 className="w-1/5 text-blue-600 text-lg font-medium">{taskCount.active}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alltask;
