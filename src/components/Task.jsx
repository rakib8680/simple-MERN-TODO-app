import React from 'react';

const Task = ({ task }) => {
  const newTask = task?.task;
  console.log(newTask);
  return (
    <>
      {
        newTask &&
        <div className=' ms-8 py-1 border-2 border-teal-900 px-8 bg-teal-900 mr-8'>
          <h1>{newTask}</h1>
        </div>
      }
    </>
  );
};

export default Task;
