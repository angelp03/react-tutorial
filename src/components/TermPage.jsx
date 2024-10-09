import { useState } from "react"
import CourseList from "./CourseList"
import TermSelector from "./TermSelector";

const TermPage = ({courses}) => {
    const [term, setTerm] = useState("Fall")
    return (
        <div>
            <TermSelector setTerm={setTerm}/>
            <CourseList courses={courses} term={term} setTerm={setTerm}/>
        </div>
    );
};

export default TermPage