import React from 'react';
import { FaPenToSquare, FaTrash } from 'react-icons/fa6';






const Task = ({ tasks }) => {


  console.log(tasks);



  return (
    <>
      {
        tasks?.map((task, index) =>
          <div key={index + 1} className=' ms-8 py-1 border-2 border-teal-900 px-8 bg-teal-900 mr-8 flex rounded-md mb-2'>
            <h1>{task?.task}</h1>
            <div>
              <button>
                <FaPenToSquare />
              </button>
              <button>
                <FaTrash />
              </button>
            </div>
          </div>)
      }


    </>
  );
};

export default Task;
