import React from 'react';
import { useForm } from "react-hook-form"

const ToDoForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data)


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex bg-teal-600 py-8 px-5'>

            <div className='flex'>
                <input placeholder="what is the task today ?" type='text' {...register("task")} className='bg-teal-600  border-2 border-teal-900 ' />
                <input type="submit" className=' bg-teal-900' />
            </div>
        </form>
    );
};

export default ToDoForm;