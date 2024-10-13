import { useState } from "react";

const TermSelector = ({setTerm, setActivePlan}) => {
    const terms = ["Fall", "Winter", "Spring"];
    const [selected, setSelected] = useState("Fall");
    const handleSelect = (term) => {
        if (selected !== term){
            setTerm(term);
            setSelected(term);
        }
    };
    return (
        <div>
            {terms.map((term) => (
                <button 
                    key={term}
                    onClick={() => handleSelect(term)}
                    disabled={selected === term}
                    style={{ backgroundColor: selected === term ? 'gray' : '' }}
                >
                    {term}
                </button>
            ))}
            <button onClick={()=>setActivePlan(true)}>
                Course Plan
            </button>
        </div>
    );
};

export default TermSelector