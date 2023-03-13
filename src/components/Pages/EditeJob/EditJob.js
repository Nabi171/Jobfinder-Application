import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeJob } from '../../../features/jobs/jobsSlice';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const EditJob = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [salary, setSalary] = useState('');
    const [deadline, setdeadline] = useState('');
    const { editing } = useSelector(state => state.jobs) || {};
    // console.log(editing);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //listen for edit mode
    useEffect(() => {

        const { id, title, type, salary, deadline } = editing || {};
        if (id) {
            // setEditMode(true);
            setTitle(title);
            setType(type);
            setSalary(salary);
            setdeadline(deadline);
        } else {
            // setEditMode(false);
            // reset();
        }
    }, [editing]);

    //update the data
    const handleUpdate = (e) => {
        e.preventDefault();
        const a = dispatch(
            changeJob({
                id: editing ?.id,
                data: {
                    title: title,
                    type: type,
                    salary: salary,
                    deadline: deadline,
                },
            })
        );
        console.log(a);
        // setEditMode(false);
        // reset();
        navigate('/')
    };
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
                                <a href="/jobs" class="main-menu" id="lws-addJob-menu">
                                    <i class="fa-solid fa-file-circle-plus"></i>
                                    <span>Add NewJob</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="lg:pl-[14rem] mt-[5.8125rem]">
                    <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                        <h1 class="mb-10 text-center lws-section-title">Edit Job</h1>

                        <div class="max-w-3xl mx-auto">
                            <form class="space-y-6">
                                <div class="fieldContainer">
                                    <label for="lws-JobTitle" class="text-sm font-medium text-slate-300">Job Title</label>
                                    <select id="lws-JobTitle" name="lwsJobTitle" required>
                                        <option
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            hidden selected>{title}</option>
                                        <option

                                        // checked={title === "Software Engineer"}
                                        // onChange={(e) => setTitle('Software Engineer')}
                                        >Software Engineer</option>
                                        <option>Software Developer</option>
                                        <option>Full Stack Developer</option>
                                        <option>MERN Stack Developer</option>
                                        <option
                                        // checked={title === "DevOps Engineer"}
                                        // onChange={(e) => setTitle('DevOps Engineer')}
                                        >DevOps Engineer</option>
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
                                    <select id="lws-JobType" name="lwsJobType" required>
                                        <option value={type} selected>{type}</option>
                                        <option>Full Time</option>
                                        <option
                                            checked={type === "Internship"}
                                            onChange={(e) => setType('Internship')}
                                        >Internship</option>
                                        <option>Remote</option>
                                    </select>
                                </div>

                                <div class="fieldContainer">
                                    <label for="lws-JobSalary">Salary</label>
                                    <div class="flex border rounded-md shadow-sm border-slate-600">
                                        <span class="input-tag">BDT</span>
                                        <input
                                            value={salary}
                                            onChange={(e) => setSalary(e.target.value)}
                                            type="number" name="lwsJobSalary" id="lws-JobSalary" required class="!rounded-l-none !border-0"
                                            placeholder="20,00,000" />
                                    </div>
                                </div>

                                <div class="fieldContainer">
                                    <label for="lws-JobDeadline">Deadline</label>
                                    <input
                                        value={deadline}
                                        onChange={(e) => setdeadline(e.target.value)}
                                        type="date" name="lwsJobDeadline" id="lws-JobDeadline" required />
                                </div>

                                <div class="text-right">
                                    <button
                                        onClick={handleUpdate}
                                        type="submit" id="lws-submit" class="cursor-pointer btn btn-primary w-fit">
                                        Edit
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

export default EditJob;