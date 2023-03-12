import axios from "../../components/utils/axios";

export const getJobs = async () => {
    const response = await axios.get('/jobs');
    return response.data;
}

export const addJobs = async (data) => {
    const response = await axios.post("/jobs", data);
    return response.data;
};