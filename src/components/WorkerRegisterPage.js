import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

function WorkerRegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', { username, email, password, userType: 'worker' });
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row w-full lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url('/FarmerImage/f2.png')`}}>
            <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register as a Worker</h2>
            <p className="mb-4">
              Create your account. It’s free and only takes a minute.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mt-5 relative">
                <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Name" className="border border-gray-400 py-1 px-2 pl-10 w-full" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="mt-5 relative">
                <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input type="email" placeholder="Email" className="border border-gray-400 py-1 px-2 pl-10 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mt-5 relative">
                <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 pl-10 w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
              <div className="mt-5">
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Register
                </button>
              </div>
              <div className="mt-5 text-center">
                <a href="/login" className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800">
                  Already have an account? Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkerRegisterPage;
