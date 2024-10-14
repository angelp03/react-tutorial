import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import './FormComponent.css';

const FormComponent = ({ courses }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    if (!courses || !courses[id]) {
        return <h2>Course not found</h2>;
    }
    const course = courses[id];

    const [formData, setFormData] = useState({
        title: course.title,
        meets: course.meets,
    });

    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let error = "";
        if (name === "title") {
            if (!value || value.length < 2) {
                error = "Course title must be at least 2 characters.";
            }
        }
        if (name === "meets") {
            if (value === "") {
                return "";
            }

            const daysPattern = /^(M|Tu|W|Th|F){1,5}$/;
            const timePattern = /^([01]\d|2[0-3]):[0-5]\d-([01]\d|2[0-3]):[0-5]\d$/;

            const [days, times] = value.split(" ");

            if (!days || !daysPattern.test(days)) {
                error = "Days should consist of M, Tu, W, Th, F without repeats.";
            } else if (!times || !timePattern.test(times)) {
                error = "Must contain days and start-end, e.g., MWF 12:00-13:20";
            } else {
                const [start, end] = times.split("-");
                if (start >= end) {
                    error = "Start time must be earlier than end time.";
                }
            }
        }
        return error;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);

        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: error,
        });
    };

    const handleCancel = () => {
        navigate('/'); 
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (Object.keys(errors).every(key => !errors[key])) {
            navigate('/');
        } else {
            console.log("Form contains errors, cannot submit");
        }
    };

    return (
        <div className="form-div">
            <h2>Editing Course: {course.term} CS {course.number}</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Course Title:</label>
                    <input 
                        type="text" 
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                    {errors.title && <p className="error">{errors.title}</p>}
                </div>
                <div>
                    <label>Meeting Times:</label>
                    <input 
                        type="text" 
                        name="meets"
                        value={formData.meets}
                        onChange={handleInputChange}
                    />
                    {errors.meets && <p className="error">{errors.meets}</p>}
                </div>
                <div>
                    <button 
                        type="button" 
                        onClick={handleCancel}
                        className="cancel-btn"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;