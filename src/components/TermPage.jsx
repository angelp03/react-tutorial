import { useState, useEffect } from "react";
import CourseList from "./CourseList";
import TermSelector from "./TermSelector";
import CoursePlan from "./CoursePlan";
import { checkCourseConflict } from "../utilities/timeConflict";

const TermPage = ({ courses }) => {
    const [term, setTerm] = useState("Fall");
    const [selected, setSelected] = useState([]);
    const [conflicts, setConflicts] = useState([]);
    const [activePlan, setActivePlan] = useState(false);
    const toggleSelected = (course) => {
        if (selected.includes(course)) {
            setSelected(selected.filter((c) => c !== course));
        } else if (!conflicts.includes(course)) {
            setSelected([...selected, course]);
        }
    };

    useEffect(() => {
        const conflictingCourses = checkCourseConflict(selected, courses);
        setConflicts(conflictingCourses);
    }, [selected, courses]);

    return (
        <div>
            <TermSelector setTerm={setTerm} setActivePlan={setActivePlan} />
            <CourseList
                courses={courses}
                term={term}
                selected={selected}
                toggleSelected={toggleSelected}
                conflicts={conflicts}
            />
            <CoursePlan
                selected={selected}
                activePlan={activePlan}
                setActivePlan={setActivePlan}
            />
        </div>
    );
};

export default TermPage;
