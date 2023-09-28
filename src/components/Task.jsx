import React from 'react';

const Task = ({ task }) => {
  const newTask = task?.task || ' ';
  console.log(newTask);
  return (
    <div>

    </div>
  );
};

export default Task;
