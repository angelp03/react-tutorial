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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCancel = () => {
        navigate('/'); 
    };

    const onSubmit = (event) => {
        event.preventDefault();
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
                </div>
                <div>
                    <label>Meeting Times:</label>
                    <input 
                        type="text" 
                        name="meets"
                        value={formData.meets}
                        onChange={handleInputChange}
                    />
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
