import React, { useState } from 'react';
import { createJob } from '../../../features/jobs/jobsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const AddJob = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [salary, setSalary] = useState('');
    const [deadline, setdeadline] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //handle addData
    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(createJob({
            title,
            type,
            salary: Number(salary),
            deadline,
        }));
        alert('Do you want to save the data?')
        navigate('/')
    }
    return (

        <div>
            <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
                <div class="sidebar">
                    <nav>
                        <ul class="space-y-4">
                            <li>
                                <Link to="/" class="main-menu menu-active" id="lws-alljobs-menu">
                                    <i class="fa-solid fa-briefcase"></i>
                                    <span> All Available Jobs</span>
                                </Link>
                                <ul class="space-y-6 lg:space-y-2 ">
                                    <li>
                                        <a class="sub-menu" href="/jobs/internship" id="lws-internship-menu">
                                            <i class="fa-solid fa-stop !text-[#FF5757]"></i>
                                            Internship
                </a>
                                    </li>
                                    <li>
                                        <a class="sub-menu" href="/jobs/fulltime" id="lws-fulltime-menu">
                                            <i class="fa-solid fa-stop !text-[#FF8A00]"></i>
                                            Full Time
                </a>
                                    </li>
                                    <li>
                                        <a class="sub-menu" href="/jobs/remote" id="lws-remote-menu">
                                            <i class="fa-solid fa-stop !text-[#56E5C4]"></i>
                                            Remote
                </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/" class="main-menu" id="lws-addJob-menu">
                                    <i class="fa-solid fa-file-circle-plus"></i>
                                    <span>Go to Home</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="lg:pl-[14rem] mt-[5.8125rem]">
                    <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                        <h1 class="mb-10 text-center lws-section-title">Add New Job</h1>

                        <div class="max-w-3xl mx-auto">
                            <form
                                onSubmit={handleAdd}
                                class="space-y-6">
                                <div class="fieldContainer">
                                    <label for="lws-JobTitle" class="text-sm font-medium text-slate-300">Job Title</label>
                                    <select id="lws-JobTitle" name="lwsJobTitle"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required>
                                        <option value="" hidden selected>Select Job</option>
                                        <option>Software Engineer</option>
                                        <option>Software Developer</option>
                                        <option>Full Stack Developer</option>
                                        <option>MERN Stack Developer</option>
                                        <option>DevOps Engineer</option>
                                        <option>QA Engineer</option>
                                        <option>Product Manager</option>
                                        <option>Social Media Manager</option>
                                        <option>Senior Executive</option>
                                        <option>Junior Executive</option>
                                        <option>Android App Developer</option>
                                        <option>IOS App Developer</option>
                                        <option>Frontend Developer</option>
                                        <option>Frontend Engineer</option>
                                    </select>
                                </div>

                                <div class="fieldContainer">
                                    <label for="lws-JobType">Job Type</label>
                                    <select id="lws-JobType" name="lwsJobType"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        required>
                                        <option value="" hidden selected>Select Job Type</option>
                                        <option>Full Time</option>
                                        <option>Internship</option>
                                        <option>Remote</option>
                                    </select>
                                </div>

                                <div class="fieldContainer">
                                    <label for="lws-JobSalary">Salary</label>
                                    <div class="flex border rounded-md shadow-sm border-slate-600">
                                        <span class="input-tag">BDT</span>
                                        <input type="number" name="lwsJobSalary"
                                            value={salary}
                                            onChange={(e) => setSalary(e.target.value)}
                                            id="lws-JobSalary" required class="!rounded-l-none !border-0"
                                            placeholder="enter amount" />
                                    </div>
                                </div>

                                <div class="fieldContainer">
                                    <label for="lws-JobDeadline">Deadline</label>
                                    <input type="date" name="lwsJobDeadline" id="lws-JobDeadline"
                                        value={deadline}
                                        onChange={(e) => setdeadline(e.target.value)}
                                        required />
                                </div>

                                <div class="text-right">
                                    <button type="submit" id="lws-submit" class="cursor-pointer btn btn-primary w-fit">
                                        Save
              </button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AddJob;