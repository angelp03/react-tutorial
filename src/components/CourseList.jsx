import CourseCard from "./CourseCard"
import "./CourseList.css"
const CourseList = ({courses, term}) => {
    return (
        <div className="course-list">
            {Object.entries(courses)
            .filter(([id, course]) => course.term == term)
            .map(([id, course]) => (
                <CourseCard key={id} course={course} />
            ))}
        </div>
    );
};

export default CourseList