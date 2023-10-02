import React from 'react';
import { FaPenToSquare, FaTrash } from 'react-icons/fa6';
import {BsCheck2} from 'react-icons/bs'





const Task = ({ tasks }) => {


  console.log(tasks);



  return (
    <>
      {
        tasks?.map((task, index) =>
          <div key={index + 1} className=' ms-8 py-1 border-2 border-teal-900 px-5 bg-teal-900 mr-8 flex rounded-sm mb-2 justify-between '>
            <h1>{task?.task}</h1>
            <div className='flex gap-5'>
              <button>
                <FaPenToSquare />
              </button>
              <button>
                <FaTrash />
              </button>
              <button>
                <BsCheck2 size={23} />
              </button>
            </div>
          </div>)
      }


    </>
  );
};

export default Task;
