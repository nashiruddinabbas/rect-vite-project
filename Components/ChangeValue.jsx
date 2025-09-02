import { useState } from "react";


const ChangeValue = () => {
    let [val,setVal] = useState(0);
    const increment = () => {
        setVal(++val);
    };
     const decrement = () => {
        setVal(--val);
     };
    return (
        <div>
            <button className="border rounded shadow px-6 py-3 text-3xl hover:bg-blue-700 hover:text-white" onClick= {increment}>+</button>
           <span className="px-3 text-3xl">{val}</span>
           <button className="border rounded shadow px-6 py-3 text-3xl hover:bg-blue-700 hover:text-white" onClick= {decrement}>-</button>
        </div>
    );
};

export default ChangeValue;