import { useState } from "react"
import CourseList from "./CourseList"
import TermSelector from "./TermSelector";

const TermPage = ({courses}) => {
    const [term, setTerm] = useState("Fall");
    const [selected, setSelected] = useState([]);
    const toggleSelected = (item) => setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
    );
    return (
        <div>
            <TermSelector setTerm={setTerm}/>
            <CourseList 
                courses={courses} 
                term={term} 
                selected={selected}
                toggleSelected={toggleSelected}/>
        </div>
    );
};

export default TermPage