import React, {useState} from 'react';

const EditProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: '',
    location: '',
    languages: '',
    description: '',
    services: '',
    education: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
      console.error('Email is required');
      return;
    }

    fetch('https://linkablebackend-production-e3d2.up.railway.app/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data as needed
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };


  return (
    <div className="w-full max-w-sm mx-auto border border-[#D3D3D3]">
      <h1 className='bg-[#47966B] hover:bg-[#47966B] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Edit Profile</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>

      <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" >
            Status
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" >
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" >
          Languages
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            rows="5"
            placeholder="Enter your description"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" >
          Services & Experties
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" >
          Education
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
            type="text"
            placeholder="Enter your email"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            className="bg-[#47966B] hover:bg-[#47966B] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;