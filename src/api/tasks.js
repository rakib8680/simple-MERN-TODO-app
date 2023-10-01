import axios from "axios"



// add a task to database 
export const addTask = async myTask => {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/tasks`, myTask)
    console.log(res.data);
    return res.data
};