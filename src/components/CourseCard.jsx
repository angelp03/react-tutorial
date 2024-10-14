import "./CourseCard.css";
import { Link } from "react-router-dom";
import { useAuthState } from "../utilities/firebase";

const CourseCard = ({ id, course, selected, toggleSelected, conflicts }) => {
    const conflicting = conflicts.includes(course);
    const [user] = useAuthState();
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
            { user &&
            <Link 
                to={`/edit/${id}`} 
                onClick={(e) => e.stopPropagation()}
                >
                Edit
            </Link>}
        </div>
    );
};

export default CourseCard;
