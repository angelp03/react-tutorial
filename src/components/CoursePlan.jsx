import React from 'react';
import './CoursePlan.css'

const CoursePlan = ({ selected, activePlan, setActivePlan}) => {
    if (!activePlan) return null;

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            setActivePlan(false);
        }
    };

    return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Your Course Plan</h2>
        {selected.length > 0 ? (
            <ul>
                {selected.map((course, index) => (
                <div key={index}>
                    <b>{course.term} CS {course.number}:</b> {course.title} ({course.meets})
                </div>
                ))}
            </ul>
        ) : (
            <div>
                <p>No courses selected yet.</p>
                <p>Select courses from the list to see them here.</p>
            </div>
        )}
            <button onClick={()=>setActivePlan(false)}>Close</button>
        </div>
    </div>
    );
};

export default CoursePlan;
