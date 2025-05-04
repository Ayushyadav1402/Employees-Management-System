import React, { useState, useContext } from 'react';
import { Authcontext } from '../../Context/Authprovider';

const Createtask = () => {
  const [userdata, setuserdata] = useContext(Authcontext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignto, setAssignto] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newtask = {
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };


    const data = userdata?.employees || [];

    if (assignto) {
  
      const updatedData = data.map((employee) => {
        if (assignto === employee.firstname) {
          // Ensure the employee has a 'tasks' array
          if (!employee.tasks) employee.tasks = [];
          if (!employee.taskCount) {
            employee.taskCount = { newtask: 0, completed: 0, failed: 0, active: 0 };
          }

          
          employee.tasks.push(newtask);

          // Increment the task count for new tasks
          employee.taskCount.newtask += 1;
        }
        return employee;
      });


      setuserdata({ ...userdata, employees: updatedData });

    
      localStorage.setItem('employees', JSON.stringify(updatedData));


      console.log("Updated employee data:", updatedData);

    } else {
      alert("Please select an employee to assign the task to.");
    }

  
    setTitle('');
    setDescription('');
    setDate('');
    setCategory('');
    setAssignto('');
  };

  return (
    <div className="p-5 mt-7 rounded bg-[#1c1c1c]">
      <form onSubmit={submitHandler} className="flex flex-wrap items-center justify-between w-full">
        <div className="w-1/2 mt-7">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Write Your Title"
              required
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              required
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              value={assignto}
              onChange={(e) => setAssignto(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Write Employee Name..."
              required
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, Frontend etc"
              required
            />
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-sm text-gray-300 mb-0.5 mt-7">Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 w-full h-44"
            required
          />
          <div>
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-sm py-3 px-5 w-full rounded outline-none mt-4"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Createtask;
