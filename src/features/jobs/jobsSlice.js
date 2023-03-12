import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs, addJobs } from "./jobsAPI";


const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: "",

}

//async thunks
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
    const Jobs = await getJobs();
    return Jobs;
})

export const createJob = createAsyncThunk('jobs/job', async (data) => {
    const job = await addJobs(data);
    return job;
})

//create slice
const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error ?.message;
                state.jobs = [];
            })

            //createJob
            .addCase(createJob.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(createJob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs.push(action.payload);
            })
            .addCase(createJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error ?.message;
            })


    }
})

export default jobsSlice.reducer;

