import React from 'react'

const TasklistNumber = ({ data }) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='rounded-xl w-[45%] px-9 py-6 bg-blue-400'>
        <h2 className='text-2xl font-semibold'>{data.taskCount.newtask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] px-9 py-6 bg-pink-400'>
        <h2 className='text-2xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='rounded-xl w-[45%] px-9 py-6 bg-green-400'>
        <h2 className='text-2xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div>
      <div className='rounded-xl w-[45%] px-9 py-6 bg-red-400'>
        <h2 className='text-2xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TasklistNumber

