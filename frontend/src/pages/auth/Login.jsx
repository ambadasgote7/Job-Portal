import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email : "",
    password : "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
  }
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form className="bg-white text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"
      onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login Now</h2>
            <input 
            type="email" 
            name='email' 
            value={formData.email}
            onChange={handleChange}
            className="w-full border my-3 border-gray-500/30 
            outline-none rounded-full py-2.5 px-4" 
            placeholder="Enter your email" required />
            <input  
            type="password" 
            name='password'
            value={formData.password}
            onChange={handleChange}
            className="w-full border mt-1 border-gray-500/30 
            outline-none rounded-full py-2.5 px-4" 
            placeholder="Enter your password" required />
            <button type="submit" className="w-full my-5 mb-3 bg-indigo-500 hover:bg-indigo-600/90 active:scale-95 transition py-2.5 rounded-full text-white">Log in</button>
            <p className="text-center mt-4">Don’t have an account? <Link to={'/signup'} className="text-blue-500 underline">Signup Now</Link></p>
        </form>
    </div>
  )
}

export default Login