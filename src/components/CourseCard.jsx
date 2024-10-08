import "./CourseCard.css"
const CourseCard = ({course}) => (
    <div className="course-card-div">
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
)

export default CourseCard