import React, { useEffect } from 'react';
import { FaPenToSquare, FaTrash } from 'react-icons/fa6';
import { BsCheck2 } from 'react-icons/bs'
import toast from 'react-hot-toast';
import axios from 'axios';





const Task = ({ tasks, refetch }) => {


  console.log(tasks);

  // delete task from database 
  const deleteTask = async _id => {
    const res = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/tasks/${_id}`)
    if (res.data.deletedCount > 0) {
      toast.success('Task deleted successfully');
      refetch();
    }
  }



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
              <button onClick={() => deleteTask(task._id)}>
                <FaTrash className='hover:text-red-400 transition-all duration-200' />
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
