import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faStarOfLife, faClock, faCalendar, faCircleCheck, faUser, faEnvelope, faVideo, faX } from '@fortawesome/free-solid-svg-icons';
import Details from './details';
import Timepicker from './time_picker';
import Datepicker from './day_date_picker';

const ScheduleMeetingModal = ({ closeModal }) => {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');
    const [scheduled, setScheduled] = useState(false);
    console.log(selectedTime);
    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };


    const handlePreviousStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 overflow-auto">
            <div className='absolute top-10 right-10 text-white cursor-pointer' onClick={closeModal}><FontAwesomeIcon icon={faX} /></div>
            <div className="bg-white rounded-lg h-[80vh] sm:w-[70vw] w-[90vw] overflow-y-scroll ">
                {!scheduled ? (
                    <div className='flex md:flex-nowrap flex-wrap'>
                        <div className='border-r md:basis-1/3 basis-full'>
                            <div className='text-[100px] flex items-center justify-center border-b py-10'><FontAwesomeIcon icon={faStarOfLife} style={{ color: "#05c2b5", }} /></div>
                            <div className='flex flex-col justify-between pb-10'>
                                <div className='px-5 py-10'>
                                    <div className='text-xl font-bold'>Fibery Demo</div>
                                    <div className='flex gap-x-2 items-center  text-gray-400 mt-2'><div><FontAwesomeIcon icon={faClock} /></div><div>45 min</div></div>
                                    <div className='flex gap-x-2 text-gray-400 mt-2'><div><FontAwesomeIcon icon={faCalendar} /></div><div>{selectedTime} {selectedDate}</div></div>
                                    <div className='mt-2'>Book a meeting with a product expert. We've helped hundreds of companies overcome product management challenges. </div>
                                </div>
                                <div className='text-blue-500 cursor-pointer px-5'>Cookie settings</div>
                            </div>
                        </div>
                        <div className='md:basis-2/3 basis-full p-5'>
                            {step === 1 && (
                                <div className=''>
                                    <h2 className="text-2xl font-semibold mb-4">Select Date & Time</h2>
                                    <div className="flex md:flex-nowrap flex-wrap gap-x-10">
                                        <div className={`${selectedDate === '' ? 'basis-full' : 'md:basis-2/3 basis-full'}`}><Datepicker setSelectedDate={setSelectedDate} /></div>
                                        <div className={` ${selectedDate === '' ? 'hidden' : 'block md:basis-1/3 basis-full'}`}><Timepicker handlenext={handleNextStep} setSelectedTime={setSelectedTime} /></div>
                                    </div>
                                </div>
                            )}
                            {step === 2 && (
                                <div>
                                    <Details setUseremail={setUseremail} setUsername={setUsername} setScheduled={setScheduled} />
                                    <button onClick={handlePreviousStep} className="mt-3 bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2">Previous</button>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className='flex justify-center py-5 px-3'>
                        <div>
                            <div className='flex justify-center'><img className='h-[70px] w-[70px] rounded-full' src='https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740' alt='profile' /></div>
                            <div className='flex justify-center mt-3'>
                                <div className='flex items-center gap-x-3'><div className=' text-green-500'><FontAwesomeIcon icon={faCircleCheck} /></div><div>You are scheduled</div></div>
                            </div>
                            <div className=' text-xs text-center mt-3'>A calander invitation has been sent to your email address.</div>
                            <div className='border border-gray-500 rounded-lg px-5 py-4'>
                                <div className='font-bold'>Fibery Demo</div>
                                <div className='flex gap-x-4 mt-2 text-gray-500'>
                                    <div><FontAwesomeIcon icon={faUser} /></div>
                                    <div>{username}</div>
                                </div>
                                <div className='flex gap-x-4 mt-2 text-gray-500'>
                                    <div><FontAwesomeIcon icon={faCalendar} /></div>
                                    <div>{selectedTime} {selectedDate}</div>
                                </div>
                                <div className='flex gap-x-4 mt-2 text-gray-500'>
                                    <div><FontAwesomeIcon icon={faEnvelope} /></div>
                                    <div>{useremail}</div>
                                </div>
                                <div className='flex gap-x-4 mt-2 text-gray-500'>
                                    <div><FontAwesomeIcon icon={faVideo} /></div>
                                    <div>Web conferencing details to follow.</div>
                                </div>
                            </div>
                            <div className='mt-[30px] border-t border-gray-500'>
                                <div className='mt-10'>
                                    <div className='font-bold'>Schedule your own meetings with Calendly for free</div>
                                    <div className='mt-3'>Eliminate the back-and-forth emalis for finding time.</div>
                                    <div className='flex md:flex-row md:justify-evenly flex-col items-center gap-x-3 mt-3 gap-y-3'>
                                        <div className='flex items-center gap-x-2 border rounded-xl p-2 border-black'>
                                            <div><FontAwesomeIcon icon={faGoogle} /></div>
                                            <div>Sign up with Google</div>

                                        </div>
                                        <div className='flex items-center gap-x-2 border rounded-xl p-2 border-black'>
                                            <div><FontAwesomeIcon icon={faMicrosoft} /></div>
                                            <div>Sign up with Microsoft</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center text-blue-500 mt-3'>Sign up with work email</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScheduleMeetingModal;
