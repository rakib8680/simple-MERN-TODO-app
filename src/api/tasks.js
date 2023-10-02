import axios from "axios"



// add a task to database 
export const addTask = async myTask => {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/tasks`, myTask)
    return res.data
};

// get all task from database 
export const getAllTask = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/allTasks`)
    return res.data;

};


