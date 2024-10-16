import CourseCard from "./CourseCard"
import "./CourseList.css"
const CourseList = ({courses, term, selected, toggleSelected, conflicts}) => {
    return (
        <div className="course-list">
            {Object.entries(courses)
            .filter(([id, course]) => course.term == term)
            .map(([id, course]) => (
                <CourseCard 
                    key={id} 
                    id={id}
                    course={course} 
                    selected={selected}
                    toggleSelected={toggleSelected}
                    conflicts={conflicts}/>
            ))}
        </div>
    );
};

export default CourseList