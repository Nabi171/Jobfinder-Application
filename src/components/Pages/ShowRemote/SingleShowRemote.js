import React from 'react';
import { useDispatch } from 'react-redux';
import { removeJob, editActive } from '../../../features/jobs/jobsSlice';
import { Link } from 'react-router-dom';

const SingleShowRemote = ({ job }) => {
    const { title, type, salary, deadline, id } = job;

    //delete the data
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(removeJob(id));
        // window.location.reload();
    }


    const handleEdit = () => {
        const a = dispatch(editActive(job));

        // console.log(a);
    }

    //update the data
    const handleUpdate = (e) => {
        e.preventDefault();

    };
    return (
        <div>
            <div className="lws-single-job">
                <div className="flex-1 min-w-0">
                    <h2 className="lws-title">{title}</h2>
                    <div className="job-footers">
                        <div className="lws-type">
                            {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
                            {type === "Full Time" &&
                                <i className="fa-solid fa-stop !text-[#FF8A00] text-lg mr-1.5"></i>
                            }
                            {type === "Internship" &&
                                <i className="fa-solid fa-stop !text-[#FF5757] text-lg mr-1.5"></i>
                            }
                            {type === "Remote" &&
                                <i className="fa-solid fa-stop !text-[#56E5C4] text-lg mr-1.5"></i>
                            }

                            {type}
                        </div>
                        <div className="lws-salary">
                            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                            BDT {salary}
                        </div>
                        <div className="lws-deadline">
                            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                            Closing on {deadline}
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                    {/* <Update /> */}

                    <div>
                        <span className="hidden sm:block">
                            <Link to='/editJob'>
                                <button type="button" className="lws-edit btn btn-primary"
                                    // onClick={handleUpdate}
                                    onClick={handleEdit}
                                >
                                    <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                                    Edit
                            </button>
                            </Link>
                        </span>
                    </div>
                    <span className="sm:ml-3">
                        <button
                            onClick={handleDelete}
                            type="button" className="lws-delete btn btn-danger ">
                            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
                            Delete
                            </button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SingleShowRemote;