import "./CourseCard.css";

const CourseCard = ({ course, selected, toggleSelected, conflicts }) => {
    const conflicting = conflicts.includes(course);
    return (
        <div
            className="course-card-div"
            onClick={() => toggleSelected(course)}
            style={{
                backgroundColor: selected.includes(course)
                    ? 'gray'
                    : conflicting
                    ? 'red'
                    : '',
                cursor: conflicting ? "not-allowed" : "pointer",
                opacity: conflicting ? 0.5 : 1,
            }}
        >
            <div className="course-card-info">
                <div className="course-card-header">
                    <h2>
                        {course.term} CS {course.number}
                    </h2>
                    <p> 
                        {course.title} 
                    </p>
                </div>
                <div className="course-card-time">
                    <p> 
                        {course.meets} 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
