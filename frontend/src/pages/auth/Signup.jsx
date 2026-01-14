import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';

const Signup = () => {
  const { navigate } = useContext(AppContext);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    name : "",
    email : "",
    password : "",
    role : "",
    image : null,
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value});
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFormData({...formData, image : selectedFile});
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/login')
    console.log("formData", formData);
  }
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form className="bg-white text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"
      onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Signup Now</h2>

            <div className='w-full my-4'>
              {preview && (
                <div className='mb-3 flex justify-center'> 
                    <img 
                    src={preview} 
                    alt="" 
                    className='w-24 h-24 rounded-full border shadow'
                    />
                </div>
              )}

              <input 
              type="file" 
              accept='image/*'
              onChange={handleFileChange}
              className='block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100 cursor-pointer'
              />

            </div>

            <input 
              type="text" 
              name='name' 
              value={formData.name}
              onChange={handleChange}
              className="w-full border my-3 border-gray-500/30 
              outline-none rounded-full py-2.5 px-4" 
              placeholder="Enter your Name" required 
            />


            <input 
              type="email" 
              name='email' 
              value={formData.email}
              onChange={handleChange}
              className="w-full border my-3 border-gray-500/30 
              outline-none rounded-full py-2.5 px-4" 
              placeholder="Enter your email" required 
            />

            <select 
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border mt-1 border-gray-500/30 
              outline-none rounded-full py-2.5 px-4" 
            >

              <option value="">Select your Role :</option>
              <option value="employer">Employer</option>
              <option value="student">Student</option>
            </select>

            <input  
              type="password" 
              name='password'
              value={formData.password}
              onChange={handleChange}
              className="w-full border mt-1 border-gray-500/30 
              outline-none rounded-full py-2.5 px-4" 
              placeholder="Enter your password" required 
            />
            
            <button 
              type="submit" 
              className="w-full my-5 mb-3 bg-indigo-500 hover:bg-indigo-600/90 
              active:scale-95 transition py-2.5 rounded-full text-white"
              >
              Signup 
              </button>
            <p className="text-center mt-4">
              Already have an account? 
              <Link to={'/login'} 
              className="text-blue-500 underline">
                Login
              </Link>
              </p>
        </form>
    </div>
  )
}

export default Signup;