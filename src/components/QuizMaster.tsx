//external dependencies
import React, { useEffect, useState } from 'react';


function QuizMaster() {
    const [roomId, setRoomId] = useState("")
    useEffect(() => {
        /**
         * promise to mimic will add socket api here
         */
        const res = new Promise((res, rej) => {
            res("123")
        }
        )
        res.then((response) => setRoomId(response as string))
    }, [])
    function handleForm(event:any){
        event.preventDefault()
     sessionStorage.setItem("roomId" , roomId)
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
            <h1 className='text-3xl font-bold text-black mb-2 mt-24'>
            Ready to create <span className='text-purple-600'>your polls  </span> </h1>
            </div>
            <form className='mt-16'>
        <label className='m-14 text-xl'>RoomId:</label>        
        <input type="text" value={roomId}  className='bg-gray-100 text-xl' readOnly/>
        <label className='m-14 text-xl'>Room Link:</label>        
        <input type="text"  value={`https:sawal.in?roomId=${roomId}`}  className='text-base' readOnly/>
        <br></br>
        <div className='flex space-x-4 justify-center items-center'>
        <button type="submit" className='bg-indigo-500 text-white px-8 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 m-24 ml-62'onClick={(e)=> handleForm(e)}>Copy roomId</button>
        <button type="submit" className='bg-indigo-500 text-white px-8 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 m-24 ml-62' onClick={(e)=> handleForm(e)}>Start the quiz</button>
        </div>
        
        
    </form>
           
                
        </div>

    );
}

export default QuizMaster;