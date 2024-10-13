import { useState } from "react"
import CourseList from "./CourseList"
import TermSelector from "./TermSelector";
import CoursePlan from "./CoursePlan";

const TermPage = ({courses}) => {
    const [term, setTerm] = useState("Fall");
    const [selected, setSelected] = useState([]);
    const [activePlan, setActivePlan] = useState(false);
    const toggleSelected = (item) => setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
    );
    return (
        <div>
            <TermSelector setTerm={setTerm} setActivePlan={setActivePlan}/>
            <CourseList 
                courses={courses} 
                term={term} 
                selected={selected}
                toggleSelected={toggleSelected}/>
            <CoursePlan selected={selected} activePlan={activePlan} setActivePlan={setActivePlan}/>
        </div>
    );
};

export default TermPage