import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs, addJobs, deleteJob, editJobs } from "./jobsAPI";


const initialState = {
    jobs: [],
    // internjobs: [],
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

export const fetchInternJobs = createAsyncThunk('jobs/fetchInternJobs', async () => {
    const Jobspart = await getJobs();
    const Jobs = Jobspart.filter(job => job.type == "Internship");
    return Jobs;
})

export const fetchFulltimeJobs = createAsyncThunk('jobs/fetchFulltimeJobs', async () => {
    const Jobspart = await getJobs();
    const Jobs = Jobspart.filter(job => job.type == "Full Time");
    return Jobs;
})

export const fetchRemoteJobs = createAsyncThunk('jobs/fetchRemoteJobs', async () => {
    const Jobspart = await getJobs();
    const Jobs = Jobspart.filter(job => job.type == "Remote");
    // const Jobs = Jobspart.filter((a, b) => a.salary > b.salary);
    // const Jobs = Jobspart.sort((a, b) => parseFloat(b.salary) - parseFloat(a.salary))
    return Jobs;
})

export const fetchHighSalaryJobs = createAsyncThunk('jobs/fetchHighSalaryJobs', async () => {
    const Jobspart = await getJobs();
    const Jobs = Jobspart.sort((a, b) => parseFloat(b.salary) - parseFloat(a.salary))
    return Jobs;
})

export const fetchLowSalaryJobs = createAsyncThunk('jobs/fetchLowSalaryJobs', async () => {
    const Jobspart = await getJobs();
    const Jobs = Jobspart.sort((b, a) => parseFloat(a.salary) - parseFloat(b.salary))
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
            //fetch jobs
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
            //fetchIntern jobs
            .addCase(fetchInternJobs.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchInternJobs.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchInternJobs.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error ?.message;
                state.jobs = [];
            })

            //fetchFulltimeJobs 
            .addCase(fetchFulltimeJobs.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchFulltimeJobs.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchFulltimeJobs.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error ?.message;
                state.jobs = [];
            })

            //fetchRemoteJobs 
            .addCase(fetchRemoteJobs.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchRemoteJobs.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchRemoteJobs.rejected, (state, action) => {
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
                const indexToUpdate = state.jobs.findIndex((t) => t.id === action.payload.id);

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
export const { editActive } = jobsSlice.actions;
