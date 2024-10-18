import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ParticipantPage() {
  const [roomId, setRoomId] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  function handleJoin() {
    if (roomId.trim() && name.trim()) {
      navigate(`/quiz/${roomId}`);
    } else {
      alert("Please enter both Room ID and Name");
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          Join <span className="text-purple-600">Sawal Quiz Room</span>
        </h1>
        <p className="text-gray-500">
          Enter the Room ID and your name to participate in the quiz.
        </p>
      </div>
      <div className="flex flex-col space-y-4 mb-6">
        <div className="w-64">
          <label className="block text-gray-700 font-semibold mb-2">Room ID</label>
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter Room ID"
            className="border-2 border-gray-300 p-4 rounded-lg w-full"
          />
        </div>
        <div className="w-64">
          <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="border-2 border-gray-300 p-4 rounded-lg w-full"
          />
        </div>
      </div>
      <button
        className="bg-indigo-500 text-white px-8 py-3 rounded-lg hover:bg-indigo-600 transition duration-300"
        onClick={handleJoin}
      >
        Join Room
      </button>
    </div>
  );
}

export default ParticipantPage;
