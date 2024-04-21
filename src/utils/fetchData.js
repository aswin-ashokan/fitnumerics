import axios  from "axios";


export const fetchData = async(exerciseOptions) =>{
    try {
        const response = await axios.request(exerciseOptions)
        return response;
    } catch (error) {
        console.log("from fetchData function error:",error.message)
    }
    
}

