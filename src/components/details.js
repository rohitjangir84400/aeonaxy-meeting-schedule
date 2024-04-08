import { useState } from "react";

export default function Details({ setUsername , setUseremail , setScheduled}) {
    const [name,setName]=useState('');
    const [email , setEmail]=useState('');
    function addguesthandler(){
        setUseremail(email);
        setUsername(name);
    }
    function handleschedule(){
        setScheduled(true);
    }
    return (
        <div>
            <div>
                <div className="font-bold mb-2 text-xl">Enter Details</div>
                <div>
                    <div className="font-bold">Name <sup>*</sup></div>
                    <div className="mt-2"><input className=" appearance-none border rounded-lg px-2 py-3 md:w-[70%] w-full" type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} /></div>
                    <div className="font-bold">Email <sup>*</sup></div>
                    <div className="mt-2"><input className=" appearance-none border rounded-lg px-2 py-3 md:w-[70%] w-full" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                    <div className=" border rounded-2xl cursor-pointer w-[100px] text-center p-2 mt-5 border-blue-500 text-blue-500 hover:bg-blue-50" onClick={addguesthandler}>Add Guest</div>
                </div>
            </div>
            <div className="mt-5">
                <div className="font-bold">I want Fibery to work for: <sup>*</sup> </div>
                <div className="flex items-center mt-2">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2">🥕 Myself</span>
                </div>
                <div className="flex items-center mt-2">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2">👩🏽‍🤝‍👩🏻 less than 10 people</span>
                </div>
                <div className="flex items-center mt-2">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2">🦄 10-50 people</span>
                </div>
                <div className="flex items-center mt-2">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2">🦅 50+ people</span>
                </div>
            </div>
            <div className="mt-5">
                <div className="font-bold">You are more about <sup>*</sup></div>
                <div className="flex items-center mt-2">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2">🗻 Strategy</span>
                </div>
                <div className="flex items-center mt-2">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2">🌞 Product Management</span>
                </div>
                <div className="flex items-center mt-2">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2">💻 Engineering</span>
                </div>
                <div className="flex items-center mt-2">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2">❓ Something else</span>
                </div>
            </div>
            <div className="mt-5">
                <div className="font-bold">Please, share anything that will help prepare for our meeting</div>
                <div className="mt-2"><textarea className=" appearance-none border rounded-lg px-2 py-3 md:w-[70%] w-full"/></div>
                <div>Please, share with us the name of your Fibery workspace (if any)</div>
                <div className="mt-2"><input className=" appearance-none border rounded-lg px-2 py-3 md:w-[70%] w-full" type="text" /></div>
            </div>
            <div className="mt-4 bg-blue-500 text-white font-bold rounded-xl cursor-pointer w-[150px] text-center py-3" onClick={handleschedule}>Schedule Event</div>
        </div>
    );
}