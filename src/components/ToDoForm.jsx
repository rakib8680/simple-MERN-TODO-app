import { useForm } from "react-hook-form";

const ToDoForm = ({ setTask }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => setTask(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex bg-teal-600 py-12 px-8 rounded-md"
    >
      <div className="flex">
        <input
          placeholder="what is the task today ?"
          type="text"
          {...register("task")}
          className="bg-teal-600 outline-none border-2 border-teal-900 placeholder:text-teal-900 ps-5 pr-20 py-1 text-teal-950 selection:bg-teal-400"
        />
        <button
          type="submit"
          className=" btn btn-sm rounded-none border-0 bg-teal-900 cursor-pointer h-9 hover:bg-teal-800 text-teal-600 px-3 "
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
