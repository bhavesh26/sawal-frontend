//external dependencies
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



function HomePage() {
    const [role, setRole] = useState("")
    const navigate = useNavigate();

    function handleChange() {
        console.log("here")
        if (role === "quiz-master") {
            navigate("/quiz-master")
        }
        if (role === "participant") {
            navigate("/participant")
        }
    }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-white">
            <div className='text-center mb-8'>
                <h1 className='text-4xl font-bold text-black mb-2'>Welcome to <span className='text-purple-600'> Sawal live polling system</span> </h1>
                <p className='text-gray-500'>
                    Please select the role that best describes you to begin using the polling system
                </p>
            </div>
            <div className='flex space-x-4 mb-6'>
                <div className={`border-2  w-64 p-6 rounded-lg ${role === "quiz-master" ? "border-indigo-600 bg-gray-100" : "border-gray-300"} `} onClick={() => setRole("quiz-master")} >
                    <h3 className='text-xl font-semibold mb-2'> I'm quiz-master</h3>
                    <p className='text-gray-500'>A quiz master can create a quiz and invite participants to take quiz</p>
                </div>
                <div className={`border-2 w-64 p-6 rounded-lg ${role === "participant" ? "border-indigo-600 bg-gray-100" : "border-gray-300"}`} onClick={() => setRole("participant")} >
                    <h3 className='text-xl font-semibold mb-2'>Participant</h3>
                    <p className='text-gray-500'>Submits answers and view live poll results in real time</p>
                </div>
            </div>
            <button className='bg-indigo-500 text-white px-8 py-3 rounded-lg hover:bg-indigo-600 transition duration-300' onClick={
                handleChange
            }> Continue </button>


        </div>
    );
}

export default HomePage;
