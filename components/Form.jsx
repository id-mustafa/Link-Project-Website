
"use client";
import {useState} from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    const result = await response.json();
    if (result.success) {
      setResponseMessage('Your message has been sent successfully, we\'ll be in touch soon!');
    } else {
      setResponseMessage('Your message failed to send, please try again.');
    }
  };
  
  return (
    <>
    <form className="space-y-6" onSubmit={handleSubmit}>
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
    <input
      type="text"
      name="name"
      id="name"
      required
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
      value={formData.name}
      onChange={handleChange}
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      required
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
      value={formData.email}
      onChange={handleChange}
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
    <textarea
      name="message"
      id="message"
      required
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
      value={formData.message}
      onChange={handleChange}
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-red-500 text-white py-2 px-4 rounded-md"
  >
    Send Message
  </button>
</form>
</>
  )
}

export default Form