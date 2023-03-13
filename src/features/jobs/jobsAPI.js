import axios from "../../components/utils/axios";

export const getJobs = async () => {
    const response = await axios.get('/jobs');
    return response.data;
}

export const addJobs = async (data) => {
    const response = await axios.post("/jobs", data);
    return response.data;
};

export const deleteJob = async (id) => {
    const response = await axios.delete(`/jobs/${id}`);
    return response.data;
}

export const editJobs = async (id, data) => {
    const response = await axios.patch(`/jobs/${id}`, data);
    return response.data;
}