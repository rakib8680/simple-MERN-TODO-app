import React, { useEffect } from "react";
import Task from "./Task";
import ToDoForm from "./ToDoForm";
import { useState } from "react";
import { getAllTask } from "../api/tasks";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTask()
      .then(res => setTasks(res))
  }, [setTasks])

  return (
    <div className="container mx-auto flex justify-center items-center pt-40  ">
      <div className="bg-teal-600 rounded-md  pb-8">
        <ToDoForm setTasks={setTasks} />
        <Task tasks={tasks} />
      </div>
    </div>
  );
};

export default Home;
