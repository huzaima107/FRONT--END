import React, { useState } from 'react';
import './LoginForm.css'; // Import custom styles if any
import { Nav } from 'react-bootstrap';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    role: 'user',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send formData to a server
    console.log(formData);
  };

  return (
    <form className="login-form container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required />
      </div>
     
    
      <button type="submit" className="btn btn-primary"><a href='patient'>Submit</a></button>
      <div className="form-group mt-3">
        <p>Don't have an account? <a href="/register">Register here</a></p>
      </div>
    </form>
  );
};

export default LoginForm;
