const CourseList = ({courses}) => (
    <div>
        {Object.entries(courses).map(([id, course]) => (
        <p>
            CS {course.number}: {course.title}
        </p>
    ))}
    </div>
)

export default CourseList