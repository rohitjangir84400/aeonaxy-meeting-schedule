import { useState } from "react";

export default function Timepicker({handlenext , setSelectedTime}) {
    const [selectedDiv, setSelectedDiv] = useState(null);

    // Function to handle div selection
    const handleDivSelection = (divId) => {
        setSelectedDiv(divId);
    };
    const times = ['1:00pm', '1:30pm', '3:00pm', '3:30pm', '4:00pm', '6:00pm', '6:30pm', '7:00pm', '8:00pm', '8:30pm', '9:00pm'];
    return (
        <div className="">
            {times.map((time, index) => (
                <div key={index} className="flex gap-2 items-baseline" onClick={() => {handleDivSelection(index); setSelectedTime(time)}}>
                    <div className={` ${selectedDiv === index ? 'w-[50%] px-2 text-center bg-[#635d5a] text-white' : 'w-full px-10 text-enter border-blue-500 text-blue-500 hover:ring-2 ring-blue-500 ring-inset'} font-bold mb-2 py-3 border rounded-lg `} >{time}</div>
                    <div>
                        {selectedDiv === index && (
                            <button className="rounded-lg text-center px-2 py-3 bg-blue-500 text-white font-bold" onClick={()=>handlenext()} >Next</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}