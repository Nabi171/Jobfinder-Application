import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs, addJobs, deleteJob, editJobs } from "./jobsAPI";


const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: "",
    editing: {},

}

//async thunks
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
    const Jobs = await getJobs();
    return Jobs;
})

export const createJob = createAsyncThunk('jobs/createJob', async (data) => {
    const job = await addJobs(data);
    return job;
})

export const removeJob = createAsyncThunk('jobs/removeJob', async (id) => {
    const jobs = await deleteJob(id);
    return jobs;
})

export const changeJob = createAsyncThunk('jobs/changeJob', async ({ id, data }) => {
    const job = await editJobs(id, data);
    return job;
})
//create slice
const jobsSlice = createSlice({
    name: 'jobs',

    initialState,
    reducers: {
        editActive: (state, action) => {
            state.editing = action.payload;
        },
        editInActive: (state) => {
            state.editing = {};
        },
    },
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

            //removeJob
            .addCase(removeJob.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(removeJob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;

                // state.transactions = state.transactions.filter(t => t.id !== action.payload);
                state.jobs = state.jobs.filter(job => job.id !== action.meta.arg);
            })
            .addCase(removeJob.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error ?.message;

            })

            //update the job
            .addCase(changeJob.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(changeJob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                const indexToUpdate = state.transaction.findIndex((t) => t.id === action.payload.id);

                state.jobs[indexToUpdate] = action.payload;
            })
            .addCase(changeJob.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error ?.message;

            })



    }
})

export default jobsSlice.reducer;

