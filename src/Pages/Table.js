import React, { useState } from 'react';

const UserForm = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    gender: '',
    age: '',
    role: '',
    email: '',
    address: '',
  });

  const [userList, setUserList] = useState([]);

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserList([...userList, userInfo]);
    setUserInfo({ fullName: '', gender: '', age: '', role: '', email: '', address: '' });
  };

  return (
    <div>
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" value={userInfo.fullName} onChange={handleChange} required />
        <br />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={userInfo.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={userInfo.age} onChange={handleChange} required />
        <br />

        <label htmlFor="role">Role:</label>
        <input type="text" id="role" name="role" value={userInfo.role} onChange={handleChange} required />
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={userInfo.email} onChange={handleChange} required />
        <br />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={userInfo.address} onChange={handleChange} required></textarea>
        <br />

        <button type="submit">Add User</button>
      </form>

      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Role</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{user.fullName}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserForm;
