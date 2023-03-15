import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../../../features/jobs/jobsSlice';
import SingleJob from './SingleJob';
import { Link } from 'react-router-dom';

const Jobs = () => {
    const dispatch = useDispatch();
    const { jobs, isLoading, isError } = useSelector((state) => state.jobs);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    // decide what to render
    let content = null;
    if (isLoading) { content = <p>Loading...</p>; }

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && jobs.length > 0) {
        content = jobs.map((job) => (
            <>
                <SingleJob key={job.id} job={job} />
            </>
        ));
    }

    if (!isLoading && !isError && jobs ?.length === 0) {
        content = <p>No jobs found!</p>;
    }


    return (
        <div>
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
                <div className="sidebar">
                    <nav>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/" className="main-menu menu-active" id="lws-alljobs-menu">
                                    <i className="fa-solid fa-briefcase"></i>
                                    <span> All Available Jobs</span>
                                </Link>
                                <ul className="space-y-6 lg:space-y-2 ">
                                    <li>
                                        <Link className="sub-menu" to="/internjobs" id="lws-internship-menu">
                                            <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                            Internship
                                </Link>
                                    </li>
                                    <li>
                                        <Link className="sub-menu" to="/fulltimeJobs" id="lws-fulltime-menu">
                                            <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                            Full Time
                                </Link>
                                    </li>
                                    <li>
                                        <Link className="sub-menu" to="/remoteJobs" id="lws-remote-menu">
                                            <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                                            Remote
                                </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/addJob" className="main-menu" id="lws-addJob-menu">
                                    <i className="fa-solid fa-file-circle-plus"></i>
                                    <span>Add NewJob</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="lg:pl-[14rem]  mt-[5.8125rem]">
                    <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                            <h1 className="lws-section-title">All Available Jobs</h1>
                            <div className="flex gap-4">
                                <div className="search-field group flex-1">
                                    <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                                    {/* <input type="text" placeholder="Search Job" className="search-input" id="lws-searchJob" /> */}
                                    <input type="text" placeholder="Search Job" className="search-input" id="lws-searchJob" />
                                </div>
                                <select id="lws-sort" name="sort" autocomplete="sort" className="flex-1">
                                    <option>Default</option>
                                    <option>Salary (Low to High)</option>
                                    <option>Salary (High to Low)</option>
                                </select>
                            </div>
                        </div>

                        <div className="jobs-list">
                            {/* <!-- Single Job 1--> */}
                            {content}
                            {/* <!-- Single Job 1--> */}
                        </div>
                    </main>
                </div>
            </div>
        </div>

    );
};

export default Jobs;