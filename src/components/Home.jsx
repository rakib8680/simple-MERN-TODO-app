import React from "react";
import Task from "./Task";
import ToDoForm from "./ToDoForm";
import { useState } from "react";

const Home = () => {
  const [task, setTask] = useState(null);

  return (
    <div className="container mx-auto flex justify-center items-center pt-40">
      <ToDoForm setTask={setTask} />
      <Task task={task} />
    </div>
  );
};

export default Home;
