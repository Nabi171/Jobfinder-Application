import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeJob } from '../../../features/jobs/jobsSlice';

const Update = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [salary, setSalary] = useState('');
    const [deadline, setdeadline] = useState('');
    const { editing } = useSelector(state => state.editing) || {};
    console.log(editing)
    const dispatch = useDispatch();
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
        dispatch(
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
        // setEditMode(false);
        // reset();
    };
    return (
        <div>
            <span className="hidden sm:block">
                <Link to='/editJob'>
                    <button type="button" className="lws-edit btn btn-primary"
                        onClick={handleUpdate}
                    >
                        <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                        Edit
                                </button>
                </Link>
            </span>
        </div>
    );
};

export default Update;