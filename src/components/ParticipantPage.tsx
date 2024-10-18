import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ParticipantPage() {
  const [roomId, setRoomId] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({ roomId: '', name: '' });
  const navigate = useNavigate();

  function validateForm() {
    const newErrors = { roomId: '', name: '' };

    if (!roomId.trim()) {
      newErrors.roomId = 'Room ID is required';
    }
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    setErrors(newErrors);
    return !newErrors.roomId && !newErrors.name;
  }

  function handleJoin() {
    if (validateForm()) {
      // Store roomId and name in session storage
      sessionStorage.setItem('roomId', roomId);
      sessionStorage.setItem('name', name);

      // Navigate to the quiz page
      navigate(`/quiz/${roomId}`);
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
            className={`border-2 p-4 rounded-lg w-full ${errors.roomId ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.roomId && <p className="text-red-500 text-sm mt-1">{errors.roomId}</p>}
        </div>
        <div className="w-64">
          <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className={`border-2 p-4 rounded-lg w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
      </div>
      <button
        className={`bg-indigo-500 text-white px-8 py-3 rounded-lg transition duration-300 ${
          !roomId || !name ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-600'
        }`}
        onClick={handleJoin}
        disabled={!roomId || !name}
      >
        Join Room
      </button>
    </div>
  );
}

export default ParticipantPage;
