import CourseCard from "./CourseCard"
import "./CourseList.css"
const CourseList = ({courses}) => (
    <div className="course-list">
        {Object.entries(courses).map(([id, course]) => (
        <CourseCard key={id} course={course}/>
        ))}
    </div>
)

export default CourseList